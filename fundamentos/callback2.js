const conversion = ( cantidad, precio, callback ) => {
    const conversion = {
        valorTotal: cantidad * precio
    }

    setTimeout( () => {
        callback(conversion)
    }, 3000)

}


conversion( 10, 1000, (convertidor) => {
    console.log(convertidor.valorTotal)
})

conversion( 1000, 200, (convertidor) => {
    console.log( convertidor.valorTotal )
})