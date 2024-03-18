const unzipper = require("unzipper");
const fs = require("node:fs");

fs.createReadStream("example.epub")
.on("open", () => {
    console.log("Opened epub file");
})
.pipe(unzipper.Extract({ path: "dist" }))
.on("close", () => {
    console.log("Unzipped epub");
});