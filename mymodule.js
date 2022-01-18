module.exports = function exporta (caminho, extensao, callback) {
  const fs = require("fs");
  const path = require("path");
  let lista = [];
  fs.readdir(caminho, function leitura(err, list) {
    if (err) {
      return callback(err);
    }
    for (let arquivo of list) {
      if (path.extname(arquivo) == `.${extensao}`) {
        lista.push(arquivo);
      }
    }
    callback(null, lista);
  });
};
