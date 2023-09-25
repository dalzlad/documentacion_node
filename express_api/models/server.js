const express = require('express')
const cors  = require('cors')
const bodyParser = require('body-parser')

class Server{

    constructor(){

        this.app = express()

        this.port = process.env.port

        this.usariosPath = '/api/usuarios';

        this.middlewares()

        this.routes()
    }

    middlewares(){//Otras funcionalidades
        this.app.use( cors() )

        this.app.use( express.static('public'))

        //this.app.use(bodyParser())
        //Lectura y parseo del body
        this.app.use( express.json() );
    }

    routes(){//Rutas de la aplicación
        this.app.use( this.usariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        }) 
    }
}

module.exports = Server