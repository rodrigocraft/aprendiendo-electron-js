const electron = require('electron');
// Módulo para el control de la vida de la aplicación.
const app = electron.app;
// Módulo para crear la ventana nativa del navegador.
const BrowserWindow = electron.BrowserWindow;
// Módulo para crear el ícono en el área de notificación.
const Tray = electron.Tray;
// Módulo para crear menús
const Menu = electron.Menu;

// Mantiene la referencia global del objeto ventana. Si no lo haces la ventana se cerrará automáticamente cuando el objeto JavaScript este recogiendo basura.
let mainWindow;

function createWindow () {
  // Crea la ventana del navegador
  mainWindow = new BrowserWindow ({ width: 700, height: 800, title: "Whatsapp Web"});
  // Carga la dirección o el directorio ingresado en la applicación.
  // ejemplo: mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL('https://web.whatsapp.com/');
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Esta acción es emitida cuando la ventana es cerrada.
  mainWindow.on('closed', function () {
    //Elimina el objeto ventana, por lo genearl tu deberías almacenar las ventanas en un arreglo, si tu aplicación soporta multiventanas, este es el momento en que se debe eliminar el elemento correspondiente.
    mainWindow = null
  });
};

// Este método es llamado cuando Electron ha finalizado, inicializado  y esta listo para crear ventanas del navegador.
//Algunas APIs pueden solamente ser usadas después de que ocurre este evento.
app.on('ready', createWindow);
// Quitar cuando todas las ventanas son cerradas.
app.on('window-all-closed', function () {
    // En OS X es común para aplicaciones en su barra de menú para estar activo mientras el usario lo quita explicitamente con Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', function () {
  //En OS X es común recrear una ventana en una aplicación cuando el icono del dock es clickeado y no hay otras ventanas abiertas.
  if (mainWindow === null) {
    createWindow()
  }
});

// En este archivo puedes incluir el resto del código principal y procesos específicos de tu aplicación. También puedes poner en archivos separados y requerirlos aquí.

app.on('ready', function () {
    const appIcon = new Tray (__dirname + '/images/web-whatsapp.png');
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Whatsapp',
        accelerator: 'CmdOrCtrl+A'
      }, {
        label: 'Acciones',
        submenu: [{
          label: 'Minimizar',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'

        }, {
          label: 'Pantalla Completa',
          accelerator: 'F11',
          role: 'togglefullscreen'
        }]
      }, {
        type: 'separator'
      }, {
        label: 'Cerrar',
        accelerator: 'CmdOrCtrl+Q',
        role: 'quit'
      }
    ])
    appIcon.setContextMenu(contextMenu);
    appIcon.setToolTip('Whatsapp Web');

    const appMenu = Menu.buildFromTemplate([
      {
        label: "Opciones",
        submenu: [
          {
            label: "Deshacer",
            accelerator: "CmdOrCtrl+Z",
            role: "undo"
          }, {
            label: "Rehacer",
            accelerator: "CmdOrCtrl+Y",
            role: "redo"
          }, {
            type: "separator"
          }, {
            label: "Cortar",
            accelerator: "CmdOrCtrl+X",
            role: "cut"
          }, {
            label: "Copiar",
            accelerator: "CmdOrCtrl+C",
            role: "copy"
          }, {
            label: "Pegar",
            accelerator: "CmdOrCtrl+V",
            role: "paste"
          }, {
            label: "Seleccionar Todo",
            accelerator: "CmdOrCtrl+A",
            role: "selectall"
          }, {
            label: "Cerrar",
            accelerator: "CmdOrCtrl+Q",
            role: "quit"
          }]
      }]);
    app.setApplicationMenu(appMenu);
});
