const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const ipc = require('electron').ipcMain;

app.on('ready', function() {
  var mainWindow = new BrowserWindow(
		{
      width: 800,
      height: 600,
			title: 'Multiventanas',
    }
	)
  mainWindow.loadURL('file://' + __dirname + '/main.html')
	mainWindow.openDevTools()

	var prefsWindow = new BrowserWindow(
			{
				width: 600,
				height: 400,
				title: 'Preferencias',
				show: false
			}
		)
	prefsWindow.loadURL('file://' + __dirname + '/subsw/prefs.html')
	ipc.on('show-prefs', function() {
		prefsWindow.show()
});
})
