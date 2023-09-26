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
//note for me in how to create variables>>>
// let dir;
// dir = filePath.slice(0, lastSlashIndex);

// let ext;
// if (dotIndex !== -1) {
//   ext = base.slice(dotIndex + 1);
// } else {
//   ext = "";
// }

// Extract the "dir" part
const dir = filePath.slice(0, lastSlashIndex);

// Extract the "ext" part
const dotIndex = base.lastIndexOf(".");
const ext = dotIndex !== -1 ? base.slice(dotIndex + 1) : "";

console.log(`The dir part of ${filePath} is: \n ${dir}`);
console.log(`The ext part of ${filePath} is: \n ${ext}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
