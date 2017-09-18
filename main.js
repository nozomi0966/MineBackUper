'use strict';
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on("window-all-closed", function() {
    app.quit();
});

app.on("ready", function() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400
    });
    // mainWindow.openDevTools();
    mainWindow.loadURL("file://" + __dirname + "/app/html/index.html");
    mainWindow.on("closed", function() {
        mainWindow = null;
    }); 
});