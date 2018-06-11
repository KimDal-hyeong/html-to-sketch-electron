const {ipcRenderer} = require("electron");
const openUrlInBrowser = require("open");

window.htmlToSketch = {
  sendToHost(channel, ...args) {
    ipcRenderer.sendToHost(channel, args)
  },
  openUrlInBrowser,
};