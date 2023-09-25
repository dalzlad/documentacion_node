/*Promesas*/
//https://lenguajejs.com/javascript/asincronia/promesas/

const buscador = (listado, datoBuscar) => new Promise(( resolve, reject ) => {
    posicion = 0
    for ( let i = 0; i < (listado.length); i++ ){
            if( listado[i] == datoBuscar){
                posicion = i;
            reject({
                error: true,
                message: "No se ha encontrado el elemento: " +  posicion + '==' + datoBuscar
            });
        }
    }
    resolve({
        error: false,
        value: "Se ha encontrado el elemento: " + posicion
        //message: "Se ha encontrado el elemento: " + datoBuscar
    });
});

lista = [10, 9, 45, 79, 67, 7, 93];
buscador.apply(this, lista, 17)
    .then(result => console.log( result.value))
    .catch(err => console.log( err.message))
/*
listado = [10, 99, 45, 79, 67, 7, 93];
datoBuscar = 18;
for ( let i = 0; i < (listado.length); i++ ){
        if( listado[i] == datoBuscar){
        console.log('existe');
    }
}
*/
