const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init Main window
let mainWindow;

function createWindow() {
    // create window
    mainWindow = new BrowserWindow({width: 800, height: 600, icon: __dirname+'/src/assets/25527.jpg'});

    // load url file index.html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // window on closed
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

// when app is reade doing create window
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
});