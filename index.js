const unzipper = require("unzipper");
const fs = require("node:fs");
const { XMLParser } = require("fast-xml-parser");


//Extracting epub to mempory
async function main() {
    const directory = (await unzipper.Open.file('example.epub')).files;
    for (let i = 0; i < directory.length; i++) {
        const path = directory[i].path;
        if (path.includes("container.xml")) {

        }
    }
  }
  
main();

//Parsing container.xml
/*
const parser = new XMLParser({ignoreAttributes: false });
let xmlObject = parser.parse(fs.readFileSync("dist/META-INF/container.xml"));
console.log(xmlObject);
*/