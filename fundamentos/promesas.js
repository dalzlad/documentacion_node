/*Promesas*/
//https://lenguajejs.com/javascript/asincronia/promesas/
const tareaDados = (iteraciones) => new Promise(( resolve, reject ) => {
    const numeros = [];
    for ( let i = 0; i < iteraciones; i++ ){
        const numero = 1 + Math.floor( Math.random() * 6 );
        numeros.push(numero);
        if( numero == 6){
            reject({
                error: true,
                message: "Se ha encontrado un seis"
            });
        }
    }
    resolve({
        error: false,
        value: numeros
    });
});

tareaDados(10)
    .then(result => console.log('Lanzamientos correctos: ', result.value))
    .catch(err => console.log('Lanzamientos incorrectos: ', err.message))