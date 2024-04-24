db = {};

db.init = function(callback) {
    $.getJSON('/js/data/db.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    });
}