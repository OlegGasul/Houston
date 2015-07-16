
function DataManager() {
    var url = 'http://10.10.10.3:8080/data';

    this.getKey = function(key, time, callback) {
        $.ajax({
            url: url + "?key=" + key + "&time=" + (time ? time : 0),
            method: "get",
            dataType: "json"
        }).done(function(data) {
            callback(data);
        });
    }

    this.setKey = function(key, value, callback) {
        $.ajax({
            url: url + "key=" + key + "&time=" + time ? time : 0,
            method: "get",
            dataType: "json"
        }).done(function(data) {
            callback(data);
        });
    }

    return this;
}
