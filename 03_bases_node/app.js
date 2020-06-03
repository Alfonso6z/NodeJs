//  requireds
/* Hay tres tipos de requireds */
// const fs = require('fs'); /* proyecto que existe en node */
// const fs = require('express'); /* no existe en node se tiene que instalar son expanciones */ 
// const fs = require('./path'); /* paquetes que nosotros mismos escribimos */

// console.log(module);  es un objeto global que esta disponible a lo largo de la app
// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

const { crearArchivo } = require('./multiplicar/multiplicar');


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));