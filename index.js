const unzipper = require("unzipper");
const fs = require("node:fs");
const { XMLParser } = require("fast-xml-parser");


//Reading container.xml
fs.createReadStream("example.epub")
.on("open", () => {
    //console.log("Opened epub file");
})
.pipe(unzipper.Extract({ path: "dist" }))
.on("close", () => {
    //console.log("Unzipped epub");
});

//Parsing container.xml
const parser = new XMLParser({ignoreAttributes: false });
let xmlObject = parser.parse(fs.readFileSync("dist/META-INF/container.xml"));
console.log(xmlObject);