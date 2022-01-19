// Create a program that prints a list of files in a given directory, filtered by the extension of the files.
// Fonte: https://nodejs.org/api/fs.html#fspromisesreaddirpath-options
// https://nodejs.org/api/path.html#path_path_extname_p
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await
// learnyounode hints

const meumodulo = require("./mymodule.js");

let caminho = process.argv[2];
let extensao = process.argv[3];

async function result(caminho, extensao) {
  meumodulo(caminho, extensao, retorna);
};

function retorna(_err, list) {
  try{
    for (let arquivo of list) {
      console.log(arquivo);
    }
  }
  catch (_err) {
    throw (_err);
  }
};

result(caminho, extensao);
