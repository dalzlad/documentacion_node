const express = require('express')
const app = express()
const puerto = 8080

/*
Establecer el directorio donde se ubicará
el directorio de las páginas estáticas
*/

app.use( express.static('public') )

app.get('/', (req, res) => {
    //res.send('Hola')
    res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/con', (req, res) => {
    //res.send('Hola')
    res.sendFile(__dirname + '/public/views/contacto.html')
})

app.get('*', (req, res) => {
    //res.send('Hola')
    res.sendFile(__dirname + '/public/views/404.html')
})




app.listen( puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})