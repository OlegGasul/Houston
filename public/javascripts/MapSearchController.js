
function MapSearchController(defaultCity) {
    var VISICOM_AUTH_KEY = "029cf14c7bc11b2438f5519f79730300";

    function convertResponse(response) {
        var results = [];
        for (var i = 0; i < response.GeoObjectCollection.featureMember.length; i++) {
            var feature = response.GeoObjectCollection.featureMember[i];
            var geoObject = feature.GeoObject

            results.push({geo: geoObject.Point.pos, description: geoObject.name});
        }

        return results;
    }

    function convertPolyline(data) {
        var result = [];
        for (var i = 0; i < data.geometry.coordinates.length; i++) {
            result.push(new L.LatLng(data.geometry.coordinates[i][1], data.geometry.coordinates[i][0]));
        }

        return { properties: data.properties, coordinates: result };
    }

    this.search = function(text, callback) {
        $.ajax({
            url: "https://geocode-maps.yandex.ru/1.x/?geocode=" + encodeURIComponent(text) + "&lang=ru-RU&format=json",
            type: "get",
            dataType: "json"
        }).done(function(data) {
            callback(convertResponse(data.response));
        }).error(function() {
            console.log('Yandex error');
            console.dir(arguments);
        });
    }

    this.calculateRoute = function(from, to, callback) {
        $.ajax({
            url: "http://api.visicom.ua/data-api/2.0/core/distance.json?origin=" + from + "&destination=" + to + "&geometry=path&key=" + VISICOM_AUTH_KEY,
            type: "get",
            dataType: "json"
        }).done(function(data) {
            callback(convertPolyline(data));
        }).error(function() {
            console.dir(arguments);
        });
    }


    function convertNearestResponse(response) {
        var result = [];
        for (var i = 0; i < response.features.length; i++) {
            var feature = response.features[i];
            if (feature.properties.settlement_id != "STL1NQ7EP")
                continue;

            result.push({ type: feature.properties.type, name: feature.properties.name, dist: feature.properties.dist_meters});
        }

        return result;
    }

    this.findNearests = function(from, radius, callback) {
        $.ajax({
            url: "http://api.visicom.ua/data-api/2.0/ru/search/adr_street.json?near=" + from.lng + "," + from.lat + "&radius=" + radius + "&key=" + VISICOM_AUTH_KEY,
            type: "get",
            dataType: "json"
        }).done(function(response) {
            callback(convertNearestResponse(response));
        }).error(function() {
            console.dir(arguments);
        });
    }

    return this;
}