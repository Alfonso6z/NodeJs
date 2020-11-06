/**
 * NOTE: Path: /api/usuarios
 */

const {Router} = require('express');
const { validarJWT } = require('../middlewares/vaidar_jwt');
const {getUsuarios} = require('../controller/usuarios');

const router = Router();


router.get('/',validarJWT,getUsuarios);


module.exports = router;