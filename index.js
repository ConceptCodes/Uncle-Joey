const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 850,
        height: 650,
        resizable: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'page.html'),
        protocol: 'file:',
        slashes: true
    }));
});
