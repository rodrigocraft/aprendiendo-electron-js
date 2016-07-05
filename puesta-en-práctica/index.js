'use strict';

const electron = require('electron');
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const Menu = electron.Menu;
const Tray = electron.Tray;

var mainWindow = null;

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Whatsapp Web",
        icon: './images/web-whatsapp.png'
    });
    mainWindow.on('closed', () => {
        mainWindow = null
    });
    mainWindow.loadURL('https://web.whatsapp.com/')
});

//
app.on('ready', function() {

    const appIcon = new Tray(__dirname + '/images/web-whatsapp.png');

    const contextMenu = Menu.buildFromTemplate([{
        label: 'Companion',
        accelerator: 'Command+C'
    }, {
        label: 'View',
        submenu: [{
            label: 'Toggle DevTools',
            accelerator: 'Alt+Command+I',
            click: function() {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        }, ]
    }, {
        type: 'separator'
    }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        selector: 'terminate:',
				role: 'close'
    }]);
    const appMenu = Menu.buildFromTemplate([{
        label: "Opciones",
        submenu: [{
            label: "Undo",
            accelerator: "CmdOrCtrl+Z",
            selector: "undo:"
        }, {
            label: "Redo",
            accelerator: "Shift+CmdOrCtrl+Z",
            selector: "redo:"
        }, {
            label: 'Reload',
            accelerator: 'Command+R',
            click: function() {
                BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
            }
        }, {
            type: "separator"
        }, {
            label: "Cut",
            accelerator: "CmdOrCtrl+X",
            selector: "cut:"
        }, {
            label: "Copy",
            accelerator: "CmdOrCtrl+C",
            selector: "copy:"
        }, {
            label: "Paste",
            accelerator: "CmdOrCtrl+V",
            selector: "paste:"
        }, {
            label: "Select All",
            accelerator: "CmdOrCtrl+A",
            selector: "selectAll:"
        }, {
            label: 'Quit',
            accelerator: 'Command+Q',
            selector: 'terminate:'
        }]
    }]);
		appIcon.setContextMenu(contextMenu)
		appIcon.setToolTip('Whatsapp Web');
		app.setApplicationMenu(appMenu);
});
