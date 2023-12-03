// The diagram below shows the different names for parts of a file path on a Unix operating system

const { example } = require("yargs");

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

/* const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);

// Create a variable to store the dir part of the filePath variable
const dir = filePath.slice(filePath.indexOf("/"), lastSlashIndex);
console.log(dir);

// Create a variable to store the ext part of the variable    .txt   file.txt
const ext = filePath.slice(filePath.lastIndexOf("."));
console.log(ext);
console.log(base);
console.log(lastSlashIndex); */

//my example
const filePath = "/user/zeliha/cyf/Module-JS-1/week-1";
// Extracting the directory
const directoryIndex = filePath.lastIndexOf("/");
const directory = filePath.slice(0, directoryIndex);
console.log("Directory:", directory);

// Extracting the file name
const fileNameIndex = filePath.lastIndexOf("/") + 1;
const fileName = filePath.slice(fileNameIndex);
console.log("File Name:", fileName);

// Extracting the file extension
const extensionIndex = fileName.lastIndexOf(".") + 1;
const extension = fileName.slice(extensionIndex);
console.log("Extension:", extension);
