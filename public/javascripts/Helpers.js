function Helpers() {

    this.toFixed = function(array, digits) {
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].toFixed(digits)
        }

        return array;
    }

}