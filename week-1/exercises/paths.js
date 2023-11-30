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
// Create a variable to store the ext part of the variable
//......................................................

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// The index of the last slash 
const lastSlashIndex = filePath.lastIndexOf("/");

// The "base" part from the filePath
const base = filePath.slice(lastSlashIndex + 1);

// Logging the "base" part
console.log(`The base part of ${filePath} is ${base}`);

//.............................................................

// Extracting the "dir" part from the filePath
const dir = filePath.slice(0, lastSlashIndex);

// The console-log
console.log(`The dir part of ${filePath} is ${dir}`);
//.............................................................

// Extracting the "ext" part from the "base" part
const extIndex = base.lastIndexOf(".");
const ext = extIndex !== -1 ? base.slice(extIndex + 1) : "No extension";

// the console log
console.log(`The ext part of ${filePath} is ${ext}`);
//......................................................


