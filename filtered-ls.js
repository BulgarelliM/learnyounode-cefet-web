// Create a program that prints a list of files in a given directory,
//  filtered by the extension of the files.
// Fonte: https://nodejs.org/api/path.html#path_path_extname_p
// https://nodejs.org/api/fs.html#fspromisesreaddirpath-options

let caminho = process.argv[2];
let ext = process.argv[3];
const fs = require("fs");
const path = require("path");

fs.readdir(caminho, function leitura(err, list) {
  try {
    for (const file of list) {
      if (path.extname(file) == "." + ext) {
        console.log(file);
      }
    }
  } catch (err) {
    console.error(err);
  }
});