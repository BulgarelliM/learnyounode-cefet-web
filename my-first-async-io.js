//  Write a program that uses a single asynchronous filesystem operation to
//  read a file and print the number of newlines it contains to the console
//  (stdout), similar to running cat file | wc -l.
// https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
// https://www.geeksforgeeks.org/node-js-fs-readfile-method/
// https://github.com/maxogden/art-of-node#callbacks
let tamanho = 0;
const fs = require("fs");
path = process.argv[2];

function somaLinhas(path) {
  fs.readFile(path, 'utf8', function leitura(err, data) {
    if (err) {
        throw err;
    }
    let conteudo = data;
    tamanho = (conteudo.split("\n")).length - 1;
    console.log(tamanho);
  });
}

somaLinhas(path);