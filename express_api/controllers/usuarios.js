const express = require('express')

usuariosGet = (req, res) => {
    res.json({
        msg: 'get API controlador'
    })
}

usuariosPost = (req, res) => {
    //Recibir peticiones del usuario
    const body = req.body

    const { nombre, edad } = req.body

    res.status(201).json({
        msg: 'POST API',
        body,
        nombre,
        edad
    })
}

usuariosPut = (req, res) => {
    res.status(500).json({
        msg:'PUT API'
    })
}

usuariosPatch = (req, res) => {
    res.json({
        msg:'PATCH API'
    })
}

usuariosDelete = (req, res) => {
    res.json({
        msg:'DELETE API'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}