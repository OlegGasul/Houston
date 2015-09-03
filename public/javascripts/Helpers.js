function Helpers() {

    this.toFixed = function(array, digits) {
        var result = [];
        
        for (var i = 0; i < array.length; i++) {
            toFixed.push(array[i].toFixed(digits));
        }

        return result;
    }

}