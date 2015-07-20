
function GeoHelper() {

    this.parseCoordinate = function(text) {
        var regexp1 = /.*?(\d+)\s*°(\d+)\s*‘(\d+)\s*‘\s*‘\s*N\s*,\s*(\d+)\s*°\s*(\d+)\s*‘\s*(\d+)\s*‘\s*‘\s*E.*?/i;
        var regexp2 = /.*?(\d+)\.(\d+)\s*,?\s*(\d+)\.(\d+).*?/i;

        if (regexp1.test(text)) {
            var results = regexp1.exec(text);
            var lat = this.convertToDec(results[1], results[2], results[3]);
            var lng = this.convertToDec(results[4], results[5], results[6]);
            return [lat, lng];
        } else if (regexp2.test(text)) {
            var results = regexp2.exec(text);
            var lat = Number.parseFloat(results[1] + "." + results[2]);
            var lng = Number.parseFloat(results[3] + "." + results[4]);
            return [lat, lng];
        } else {
            return false;
        }
    }

    this.convertToDec = function(hours, mins, secs) {
        var klop = Number.parseFloat(mins + "." + secs);
        return  Number.parseInt(hours, 10) + klop / 60;
    }

    this.convertToHoursMinSec = function(dec) {

    }

    return this;
}
