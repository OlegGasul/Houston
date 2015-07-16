
function GeoHelper() {

    this.convertToDec = function(hours, mins, secs) {
        var klop = Number.parseFloat(mins + "." + secs);
        return  Number.parseInt(hours, 10) + klop / 60;
    }

    this.convertToHoursMinSec = function(dec) {

    }

    return this;
}
