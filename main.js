const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        icon: path.join(__dirname, 'assets', 'wechatReaderIcon.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    win.loadURL('https://weread.qq.com/') // 微信读书网页版地址

    // 可选: 去掉菜单栏
    win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
