const fs = require('fs');
var fsex = require('fs-extra')
const path = require("path");
const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const save_dir = path.join(userHome, config.directry.data);
const backup_dir = path.join(userHome, config.directry.backup);
module.exports = {
    getDatas: function(){
        return fs.readdirSync(save_dir);
    },
    copyData: function(dataname){
        const copyfilename = backup_dir+"/"+ dataname  +"-"+getDate();
        const savefilename = save_dir+"/"+dataname;
        fsex.copySync(savefilename, copyfilename);
        alert('finised backup ' +  copyfilename);
        return copyfilename;
    },
    getBackupList: function(){
        return fs.readdirSync(backup_dir);
    }
};
function getDate(){
    var dt = new Date();
    return dt.getFullYear().toString() + "-" +dt.getMonth().toString() + "-" + dt.getDate().toString()
}