const { Router } = require('express')
const router = Router() //Obtener la función Router


router.get('/', (req, res) =>{
    res.json({
        msg: 'GET APIkkk'
    })
})            

router.post('/', async(req, res = response) =>{
    const bod = req.query
    const {nombre } = bod
    //const{nombre, edad} = req.body

    res.status(201).json({
        msg: 'POST APIjjjj',
        nombre
        
    })
})

router.put('/', (req, res) =>{
   //Recibir peticiones del usuario
   //desestructurar
   const { nombre, profesion, hobbie } = req.body;
    res.json({
        msg: 'PUT API',
        nombre,
        profesion,
        hobbie
    })
})

router.delete('/', (req, res) =>{
    res.json({
        msg: 'DELETE API'
    })
})

router.patch('/', (req, res) =>{
    res.json({
        msg: 'PATCH API'
    })
})

module.exports = router