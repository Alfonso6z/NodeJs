const express = require('express');

const { verificaToken } = require("../middlewares/autenticacion");
const { verificaAdminRol } = require("../middlewares/autenticacion");

let app = express();

let Categoria = require('../models/categoria');

/** 
 * Muestra todas las categorias
 */
app.get('/categoria', verificaToken, (req, res) => {

    Categoria.find({})
        .sort('descripcion') //ordena
        .populate('usuario', 'nombre email') //muestra el usuario por medio del id
        .exec((err, categorias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            Categoria.count({}, (err, conteo) => {

                res.json({
                    ok: true,
                    categorias,
                    cuantos: conteo,
                });

            })
        })
});

/**
 * Muestra una categoria por ID
 */

app.get('/categoria/:id', verificaToken, (req, res) => {

    let id = req.params.id
    Categoria.findById(id, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El Id no es correcto',
                }
            })
        }
        res.json({
            ok: true,
            categoriaDB,
        });
    })

});

/**
 * Crea Nueva Categoria
 */

app.post('/categoria', verificaToken, (req, res) => {
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id,
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Llave duplicada wex'
                }
            })
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB,
        })
    });

});

/**
 *  Actualiza Categoria 
 */

app.put('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let descCategoria = {
        descripcion: body.descripcion
    }

    Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            categoria: categoriaDB,
        });
    });
});

/**
 * Borra Categoria
 */

app.delete('/categoria/:id', [verificaToken, verificaAdminRol], (req, res) => {
    // Solo un administrador puede borrar la categoria
    // Categoria.findByIdAndRemove

    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaBorrada) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!categoriaBorrada) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Categoria no encontrada'
                }
            });
        }

        res.json({
            ok: true,
            usuario: categoriaBorrada,
            message: 'Categoria Borrada'
        });
    });
})


module.exports = app;