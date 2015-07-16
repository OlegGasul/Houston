
function DataManager() {
    var url = '/data';

    this.getKey = function(key, time, callback) {
        $.ajax({
            url: url + "?key=" + key + "&time=" + (time ? time : 0),
            type: "get",
            dataType: "json"
        }).done(function(data) {
            callback(data);
        });
    }

    this.setKey = function(key, value, callback) {
        $.ajax({
            url: url,
            type: "post",
            data: { key: key, value: value }
        }).done(function(data) {
            callback(data);
        });
    }

    return this;
}
