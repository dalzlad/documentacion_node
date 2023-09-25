const getUsuarioById = (id, callback ) => {

    const user = {
        id,
        nombre: 'Diego', 
        apellidos: 'López',
        email: 'dalopez123@misena.edu.co'
    }

    //mandar después de 3 segundos un retorno
   setTimeout( () => {
        //console.log(user)
        callback(user)
    }, 3000 )
    
   //callback(user)
}

getUsuarioById(7, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre)
    console.log(usuario.apellidos)
    console.log(usuario.email)
})