//  Write a program that uses a single asynchronous filesystem operation to
//  read a file and print the number of newlines it contains to the console
//  (stdout), similar to running cat file | wc -l.
let tamanho = 0;
let myNumber = 0;
const fs = require("fs");
path = process.argv[2];

function somaLinhas(path) {
  fs.readFile(path, 'utf8', function doneReading(err, data) {
    if (err) {
        throw err;
    }
    let conteudo = data;
    tamanho = (conteudo.split("\n")).length - 1;
    console.log(tamanho);
  });
}

somaLinhas(path);