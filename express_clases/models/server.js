const express = require('express')

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.port

        this.middlewares()//Rutas de la aplicación

        this.routes() //Disparar el método routes
    }

    middlewares() {
        this.app.use(express.static(__dirname + "/public"));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            //res.send('Home')
            res.json({
                msg:'get API'
            })
        })

        this.app.post('/api', (req, res) => {
            //res.send('Home')
            res.json({
                msg:'POST API'
            })
        })

        this.app.put('/api', (req, res) => {
            //res.send('Home')
            res.json({
                msg:'PUT API'
            })
        })

        this.app.patch('/api', (req, res) => {
            //res.send('Home')
            res.json({
                msg:'PATCH API'
            })
        })

        this.app.delete('/api', (req, res) => {
            //res.send('Home')
            res.json({
                msg:'DELETE API'
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = server