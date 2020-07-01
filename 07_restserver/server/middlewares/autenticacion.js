const jwt = require('jsonwebtoken');

/**
 * Verifica Token
 */

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    name: "la cagaste",
                    meesage: "El token no es valido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    })

}

/**
 *  Verifica AdminRole
 */

let verificaAdminRol = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                name: "la cagaste",
                meesage: "el usuario no es Administrador"
            }
        });
    }



}

/**
 * Verifica Token IMG
 */

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    name: "la cagaste",
                    meesage: "El token no es valido"
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    })

}
module.exports = {
    verificaToken,
    verificaAdminRol,
    verificaTokenImg
}