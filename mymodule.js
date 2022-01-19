// Fonte: https://www.w3schools.com/jsref/jsref_splice.asp

module.exports = function exporta(caminho, extensao, callback) {
  // conforme apresentado nos HINTS
  const fs = require("fs");
  const path = require("path");
  fs.readdir(caminho, function leitura(err, list) {
    if (err) {
      return callback(err); // conforme apresentado nos HINTS
    }
    let i = 0;
    while (i < list.length) {
      let index = list.indexOf(list[i]);
      if (path.extname(list[i]) != `.${extensao}`) {
        list.splice(index, 1);
        i = i - 1;
      }
      i = i + 1;
    }
    callback(null, list); // conforme apresentado nos HINTS
  });
};
