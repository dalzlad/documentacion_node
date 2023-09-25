const { maxHeaderSize } = require("http");

const promediar = (listado) => {
    return max(listado);
}

listado = [45, 21, 12, 2, 3];
console.log(promediar.apply(listado));
