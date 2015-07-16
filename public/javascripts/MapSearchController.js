
function MapSearchController(defaultCity) {

    function convertResponse(response) {
        var results = [];
        for (var i = 0; i < response.GeoObjectCollection.featureMember.length; i++) {
            var feature = response.GeoObjectCollection.featureMember[i];
            var geoObject = feature.GeoObject

            results.push({geo: geoObject.Point.pos, description: geoObject.name});
        }

        return results;
    }

    this.search = function(text, callback) {
        $.ajax({
            url: "https://geocode-maps.yandex.ru/1.x/?geocode=" + encodeURIComponent(text) + "&lang=ru-RU&format=json",
            method: "get",
            dataType: "json"
        }).done(function(data) {
            callback(convertResponse(data.response));
        });
    }

    return this;
}