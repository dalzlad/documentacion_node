//https://github.com/pillarjs/hbs
const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + "/public"));

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");



app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Home'
    })
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})