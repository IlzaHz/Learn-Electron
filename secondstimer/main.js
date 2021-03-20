const { app, BrowserWindow } = require('electron')

const path = require('path');
const url = require('url');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
