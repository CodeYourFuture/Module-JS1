// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
let firstSlashIndex=filePath.indexOf("/");
let dirPart=filePath.slice(firstSlashIndex,lastSlashIndex);
console.log(`The dir part of ${filePath} is ${dirPart}`);


// Create a variable to store the ext part of the variable

let lastDotIndex=filePath.lastIndexOf(".");
let extPart=filePath.slice(lastDotIndex);
console.log(`file extenstion of this path ${filePath} is ${extPart}`);
