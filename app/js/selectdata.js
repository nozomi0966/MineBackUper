function getGemedataName(){
    const backup = require("../../src/main/Backup.js");
    const data = backup.getDatas();
    // data.forEach(function(element) {
    //     makebutton(element)
    // }, this);
    return data;
}
function startbutton() {
    var x = document.createElement("SELECT");
    x.setAttribute("id", "mySelect");
    document.body.appendChild(x);
    data = getGemedataName()
    
   	data.map(function(e) {
    	setOptinon(e, e);
    });
}
function setOptinon(value, text){
	console.log(value);
	var z = document.createElement("option");
    z.setAttribute("value", value);
    var t = document.createTextNode(text);
    z.appendChild(t);
    document.getElementById("mySelect").appendChild(z);
}