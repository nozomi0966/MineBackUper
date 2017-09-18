function getGemedataName() {
    const backup = require("../../src/main/Backup.js");
    const data = backup.getDatas();
    return data;
}
function startButton() {
    makeBackuplist();
    var x = document.createElement("SELECT");
    x.setAttribute("id", "gamedata");
    document.body.appendChild(x);
    data = getGemedataName()

    data.map(function (e) {
        setOptinon(e, e);
    });
    makeButton();
}
function setOptinon(value, text) {
    // console.log(value);
    var z = document.createElement("option");
    z.setAttribute("value", value);
    var t = document.createTextNode(text);
    z.appendChild(t);
    document.getElementById("gamedata").appendChild(z);
}
function makeButton() {
    var selectedbutton = document.createElement("BUTTON");
    var t = document.createTextNode("make backup data");
    selectedbutton.setAttribute("id", 'selectbutton');
    selectedbutton.onclick = function () {
        copyBackup('gamedata');
    };
    selectedbutton.appendChild(t);
    document.body.appendChild(selectedbutton);
}
function copyBackup(id) {
    var selectedName = document.getElementById(id).value;
    const backup = require("../../src/main/Backup.js");
    backup.copyData(selectedName);
    // console.log(selectedName);
}
 function makeBackuplist(){
    const data = require("../../src/main/Backup.js");
    const backuplist = data.getBackupList();
    backuplist.map(function (e) {
        var backuplist = document.getElementById('backuplist');
        var backuplistul = document.getElementById('backuplistul');
        console.log(e);
        var z = document.createElement("li");
        var t = document.createTextNode(e);
        z.appendChild(t)
        z.setAttribute("id", 'backuplistli');
        backuplistul.appendChild(z);
        backuplist.appendChild(backuplistul);
        document.body.appendChild(backuplist);
    });
}