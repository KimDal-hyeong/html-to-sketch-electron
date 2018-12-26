const {app, Menu, dialog} = require('electron');
const electron = require('electron');

const path = require('path');
const url = require('url');

const updateChecker = require('./updateChecker.js');
const commitHash = require('./commitHash.json').commitHash;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1400, height: 850});

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  if(process.env.NODE_ENV === 'dev') {
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.executeJavaScript('document.getElementsByClassName(\'Content__webview\')[0].openDevTools();');
    require('electron-connect').client.create(mainWindow);
  }

  const menu = Menu.buildFromTemplate([
    {
      label: app.getName(),
      submenu: [
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }},
        {
          label: 'about',
          click: function () {
            dialog.showMessageBox({
              type: 'info',
              title: 'HTML to Sketch',
              buttons: ['close'],
              message: 'HTML to Sketch ' + app.getVersion(),
              detail: 'commit : ' + commitHash + '\n\nhttps://github.com/KimDal-hyeong/html-to-sketch-electron'
            })
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
      ]
    },
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Open dev tools',
          click: function () {
            mainWindow.webContents.openDevTools();
            mainWindow.webContents.executeJavaScript('document.getElementsByClassName(\'Content__webview\')[0].openDevTools();');
          }
        },
        {
          label: 'Reset font replacement history',
          click: function () {
            mainWindow.webContents.executeJavaScript('localStorage.removeItem(\'replaceHistory\'); document.getElementsByClassName(\'Content__webview\')[0].reload();');
          }
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);

  updateChecker();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
