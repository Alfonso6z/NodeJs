/*
   NOTE: Path:/api/mensaje
*/

const {Router} = require('express');
const { optenerChat } = require('../controller/mensaje');
const { validarJWT } = require('../middlewares/vaidar_jwt');

const router = Router();


router.get('/:de',validarJWT,optenerChat);


module.exports = router;


