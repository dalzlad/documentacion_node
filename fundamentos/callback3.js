const getUsuarioById = (id, callback ) => {

    const producto = {
        id,
        nombre: 'Agua', 
        precio: 1500,
        descripcion: 'Agua'
    }

    //mandar después de 3 segundos un retorno
   setTimeout( () => {
        //console.log(user)
        callback(producto)
    },  5000)
    
   //callback(user)
}

getProductoById(7, (producto) => {
    console.log(producto.id)
    console.log(producto.nombre)
    console.log(producto.precio)
})