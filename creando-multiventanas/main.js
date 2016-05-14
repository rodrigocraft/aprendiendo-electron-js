const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;
const Menu = remote.Menu;

var template = [
	{
	  label: 'Electron',
	  submenu: [
			{
		    label: 'Prefs',
		    accelerator: 'CmdOrCtrl+P',
				click: function () {
				  ipc.send('show-prefs')
				}
	    },
		]
	},
	{
    label: 'Editar',
	  submenu: [
			{
		    label: 'Deshacer',
		    accelerator: 'CmdOrCtrl+Z',
		    role: 'undo'
	    },
			{
		    label: 'Rehacer',
		    accelerator: 'Shift+CmdOrCtrl+Z',
		    role: 'redo'
	    },
			{
	      type: 'separator'
	    },
			{
	      label: 'Cortar',
	      accelerator: 'CmdOrCtrl+X',
	      role: 'cut'
	    }, {
	      label: 'Copiar',
	      accelerator: 'CmdOrCtrl+C',
	      role: 'copy'
	    },
			{
	      label: 'Pegar',
	      accelerator: 'CmdOrCtrl+V',
	      role: 'paste'
	    },
			{
	      label: 'Seleccionar Todo',
	      accelerator: 'CmdOrCtrl+A',
	      role: 'selectall'
    	},
		]
	},
	{
    label: 'Ventana',
    role: 'window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
    ]
  },
]

var menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
