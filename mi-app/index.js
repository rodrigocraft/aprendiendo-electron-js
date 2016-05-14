const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

app.on('ready', function () {
    var mainWindow = new BrowserWindow ({
			title: 'Empaquetado',
			icon: './resources/app/mi-app.png',
			width: 400,
			height: 200
		})
		mainWindow.loadURL('file://' + __dirname + '/index.html')
})
