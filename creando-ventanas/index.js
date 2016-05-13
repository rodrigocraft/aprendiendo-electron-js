const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
app.on('ready', function () {
	var mainWindow = new BrowserWindow ({
		width:800,
		height:600,
		title: "app.js",
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html')
	// mainWindow.show()
})
