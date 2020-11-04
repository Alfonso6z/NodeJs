/**
 * NOTE: Path: /api/login
 */

const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario,login,renewToken } = require('../controller/auth');
const { validarJWT } = require('../middlewares/vaidar_jwt');
const { validarCampos } = require('../middlewares/vallidar_campos');

const router = Router();

router.post('/new',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos,
],crearUsuario);

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos,
],login);

router.get('/renew',validarJWT,renewToken);


module.exports = router;