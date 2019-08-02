var lynfuncs = require("./lynfuncs.js");
try {
    var a = ["D:/App/nodejs/node.exe", "D:/App/nodejs/node.exe", "fd5", "8"];
    console.log(lynfuncs.sum_args(lynfuncs.extract_args(a))); // process.argv
} catch (error) {
    console.error(error.message);
}
// //console.log("\x1b[31m --- THE END ---\x1b[0m");