// Write a program that uses a single synchronous filesystem operation to
//  read a file and print the number of newlines (\n) it contains to the
//  console (stdout), similar to running cat file | wc -l.
const fs = require("fs");
let path = process.argv[2];
let response = fs.readFileSync(path);
const str = response.toString();
let tamanho = (str.split("\n")).length - 1;
console.log(tamanho);
