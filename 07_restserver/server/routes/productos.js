const express = require('express');

const { verificaToken } = require("../middlewares/autenticacion");

let app = express();

let Producto = require('../models/producto');

/** 
 * Muestra todos los productos
 */
app.get('/producto', verificaToken, (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);

    Producto.find({ disponible: true })
        .skip(desde)
        .limit(limite)
        .populate('usuario', 'nombre email')
        .populate('categoria', 'descripcion') //muestra el usuario por medio del id
        .sort('nombre') //ordena
        .exec((err, productos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            Producto.count({}, (err, conteo) => {

                res.json({
                    ok: true,
                    productos,
                    cuantos: conteo,
                });

            })
        })
});

/**
 * Muestra un producto por ID
 */

app.get('/producto/:id', verificaToken, (req, res) => {

    let id = req.params.id
    Producto.findById(id)
        .populate('usuario', 'nombre email')
        .populate('categoria', 'descripcion') //muestra el usuario por medio del id
        .exec(
            (err, productoDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }
                if (!productoDB) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'El Id no es correcto',
                        }
                    })
                }
                res.json({
                    ok: true,
                    productoDB,
                });
            }
        );


});

/**
 * Buscar Productos
 */

app.get('/producto/buscar/:termino', verificaToken, (req, res) => {

    let termino = req.params.termino;

    let regex = new RegExp(termino, 'i');

    Producto.find({ nombre: regex })
        .populate('categoria', 'descripcion')
        .exec((err, productos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                productos
            })
        });

})

/**
 * Crea Nuevo Producto
 */

app.post('/producto', verificaToken, (req, res) => {
    let body = req.body;

    let producto = new Producto({
        usuario: req.usuario._id,
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria,
    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            producto: productoDB,
        })
    });

});

/**
 *  Actualiza Producto 
 */

app.put('/producto/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let descCategoria = {
        nombre: body.nombre,
        procioUni: body.procioUni,
        categoria: body.categoria,
        disponible: body.disponible,
        descripcion: body.descripcion
    }

    Producto.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, productoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            producto: productoDB,
        });
    });
});

/**
 * Borra Producto
 */

app.delete('/producto/:id', [verificaToken], (req, res) => {
    // Solo un administrador puede borrar la producto
    // Producto.findByIdAndRemove
    let id = req.params.id;
    let cambiarDisponible = {
        disponible: false,
    }

    Producto.findByIdAndUpdate(id, cambiarDisponible, { new: true }, (err, productoBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if (!productoBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            producto: productoBorrado
        });
    });
});


module.exports = app;