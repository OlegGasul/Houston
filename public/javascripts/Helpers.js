function Helpers() {

    this.toFixed = function(array, digits) {
        if (array.lat && array.lng)
            return this.toFixed([array.lat, array.lng], digits);

        var result = [];

        for (var i = 0; i < array.length; i++) {
            result.push(parseFloat(array[i]).toFixed(digits));
        }

        return result;
    }

}