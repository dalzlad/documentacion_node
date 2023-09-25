const { json } = require("body-parser");
const { markAsUntransferable } = require("worker_threads");

function conversion(cantidadPesos, valorDolarPesos ) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve( cantidadPesos * valorDolarPesos);
      }, 3000);
    });
}

async function conversionDolares(n1){
    const maximoA = await conversion(10, 4675);
    const maximoB = await conversion(20, 3000);
    return (maximoA + maximoB) / 2;
 }

1.Reflexion inicial
2-json
3erdia-Crud Mongo
4.martes-crudMongo
5.miercoles-node js