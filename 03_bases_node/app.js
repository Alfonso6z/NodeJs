//  requireds
/* Hay tres tipos de requireds */
// const fs = require('fs'); /* proyecto que existe en node */
// const fs = require('express'); /* no existe en node se tiene que instalar son expanciones */ 
// const fs = require('./path'); /* paquetes que nosotros mismos escribimos */

// console.log(module);  es un objeto global que esta disponible a lo largo de la app
// console.log(process.argv);

// let argv2 = process.argv;
// console.log(argv.base);
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let commando = argv._[0];

switch (commando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(base => console.log('Correcto'))
            .catch(e => console.log('mal'));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.rainbow(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}