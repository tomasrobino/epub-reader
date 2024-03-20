const unzipper = require("unzipper");
const fs = require("node:fs");
const { XMLParser } = require("fast-xml-parser");



async function main() {
    //Extracting epub to memory
    const directory = (await unzipper.Open.file('example.epub')).files;

    const parser = new XMLParser({ignoreAttributes: false });
    //Parsing content.opf
    let contentOPF;
    for (let i = 0; i < directory.length; i++) {
        const path = directory[i].path;
        if (path.includes("content.opf")) {
            contentOPF = parser.parse(await directory[i].buffer());
        }
    }
    console.log(contentOPF)
}
  
main();