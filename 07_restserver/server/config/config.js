const { mongo } = require("mongoose");

/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno 
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Vencimiento del token
 *  seg * min * h * dias
 */

process.env.CADUCIDAD_TOKEN = '1h';

/**
 * seed de autenticación
 */

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

/**
 * Base de datos
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = `mongodb://localhost:27017/cafe`;

} else {
    urlDB = process.env.MONGO_DB_URL;
}

process.env.URLDB = urlDB;

/**
 * Google Client ID
 */

process.env.CLIENT_ID = process.env.CLIENTE_I || '779516978679-rfa5d0coskkf9cobvji3t3cb1g8qrdo0.apps.googleusercontent.com'