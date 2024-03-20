const unzipper = require("unzipper");
const fs = require("node:fs");
const { XMLParser } = require("fast-xml-parser");


//Extracting epub to cache file
function extract() {
    fs.unlink("result.txt", err => {
        if (err) throw err;
    });
    let stream = fs.createWriteStream("result.txt", {flags: "a"});
    fs.createReadStream("example.epub")
    .pipe(unzipper.Parse())
    .on("entry", async entry => {
        stream.write(await entry.buffer())
    });
}

extract()

//Parsing container.xml
/*
const parser = new XMLParser({ignoreAttributes: false });
let xmlObject = parser.parse(fs.readFileSync("dist/META-INF/container.xml"));
console.log(xmlObject);
*/