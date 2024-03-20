const { Open } = require("unzipper");
const { XMLParser } = require("fast-xml-parser");
const { app, BrowserWindow } = require('electron')


async function extract() {
    //Extracting epub to memory
    const directory = (await Open.file('example.epub')).files;

    const parser = new XMLParser({ignoreAttributes: false });
    //Parsing content.opf
    let contentOPF;
    for (let i = 0; i < directory.length; i++) {
        const path = directory[i].path;
        if (path.includes("101.xhtml")) {
            contentOPF = (await directory[i].buffer()).toString();
        }
    }
    console.log(contentOPF)
    return contentOPF;
}

function createWindow(res) {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL("data:text/xml,"+res);
}

app.whenReady().then(() => extract()).then(res => {
  createWindow(res)
})