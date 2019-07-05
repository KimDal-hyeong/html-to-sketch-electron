const {ipcRenderer} = require("electron");

window.htmlToSketch = {
  sendToHost(channel, ...args) {
    ipcRenderer.sendToHost(channel, args)
  },
};
