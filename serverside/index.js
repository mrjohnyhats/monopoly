const {BrowserWindow, app} = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
    win = new BrowserWindow({width: 1000, height: 1000});

    win.loadURL(url.format({
        pathname: path.join(__dirname, '../clientside/index.html'),
        protocol: 'file:',
        slashes: true
    }));
};

app.on('ready', createWindow);
