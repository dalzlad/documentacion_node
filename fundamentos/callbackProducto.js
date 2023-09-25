const getUsuarioByIdProducto = (id, callback) => {
    const producto = {
        id,
        nombre: 'Agua',
        precio: 2500,
        observaciones: 'Ninguna'
    }

    callback(producto)
}

getUsuarioByIdProducto(7, (usuario) => {
    console.log(producto.id),
    console.log(producto.nombre),
    console.log(producto.precio)
})