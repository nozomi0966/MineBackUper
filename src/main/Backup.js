var fs = require('fs');

var Backup = function(args) {
    var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    return {
        getDatas: function(){
            fs.readdir(config.directry.data, function (err, list) {
                if (err) {
                    console.error(err);
                    return err;
                }
                else {
                    return list
                }
            });
        }
    }
}