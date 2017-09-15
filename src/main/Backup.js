const fs = require('fs');
const path = require("path");
const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const dirname = path.join(userHome, config.directry.data);
module.exports = {
    getDatas: function(){
        return fs.readdirSync(dirname)
    }
};