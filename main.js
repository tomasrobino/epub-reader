const { Open } = require("unzipper");
const { XMLParser } = require("fast-xml-parser");
const { app, BrowserWindow } = require('electron')


async function getFile(directory, path) {
    //Path parameter doesn't really have to be the full path, just something that will uniquely identify the file
    //Searching for file in directory
    for (let i = 0; i < directory.length; i++) {
        if (directory[i].path.includes(path)) {
            return await directory[i].buffer();
        }
    }
}

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  const directory = (await Open.file(process.argv[2])).files;
  //console.log(await extract(directory))
  win.loadURL("data:text/xml,"+(await getFile(directory, "content.opf")).toString());
}

app.whenReady().then(() => {
  createWindow()
})