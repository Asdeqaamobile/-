const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    // فتح صفحة تسجيل الدخول أولاً
    win.loadFile('login.html'); // تأكد من أن لديك صفحة login.html
}

// عند جاهزية التطبيق، أنشئ نافذة
app.whenReady().then(createWindow);

// إغلاق التطبيق عند إغلاق جميع النوافذ
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// إعادة إنشاء النافذة عند النقر على أيقونة التطبيق في Dock (macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
