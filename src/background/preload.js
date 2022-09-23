const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    runTrade: (data) => ipcRenderer.invoke('ipcFunc:trade', data),
    handleinfoConsole: (callback) => ipcRenderer.on('info-console', callback)
})
