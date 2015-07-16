
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

    function convertPolyline(coordinates) {
        var result = [];
        for (var i = 0; i < coordinates.length; i++) {
            result.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
        }

        return result;
    }

    this.search = function(text, callback) {
        $.ajax({
            url: "https://geocode-maps.yandex.ru/1.x/?geocode=" + encodeURIComponent(text) + "&lang=ru-RU&format=json",
            type: "get",
            dataType: "json"
        }).done(function(data) {
            callback(convertResponse(data.response));
        });
    }

    this.calculateRoute = function(from, to, callback) {
        $.ajax({
            url: "http://api.visicom.ua/data-api/2.0/core/distance.json?origin=" + from + "&destination=" + to + "&geometry=path&key=" + VISICOM_AUTH_KEY,
            type: "get",
            dataType: "json"
        }).done(function(data) {
            callback(convertPolyline(data.geometry.coordinates));
        }).error(function() {
            console.dir(arguments);
        });
    }

    return this;
}