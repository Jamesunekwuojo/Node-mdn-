const { isUtf8 } = require("buffer");
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello world");

let read = fs.readFileSync("./test.txt", { encoding: "utf-8"});
console.log(read);

fs.unlinkSync("./test.txt"); // To delete the file createsd