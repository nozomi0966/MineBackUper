function getGemedataName() {
    const backup = require("../../src/main/Backup.js");
    const data = backup.getDatas();
    return data;
}
function startButton() {
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
    var t = document.createTextNode("select");
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
    console.log(selectedName);
}
 