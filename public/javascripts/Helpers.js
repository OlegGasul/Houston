function Helpers() {

    this.toFixed = function(array, digits) {
        for (var i in array) {
            array[i] = array[i].toFixed(digits)
        }

        return array;
    }

}