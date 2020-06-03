let nombre = 'Eddie Van Halen';
let band = 'VH';

/* NOTE: Las formas de concatenar String con Templates Literales
 *   con los backticks se pueden ejecutar funciones de JS 
 */


// console.log(nombre + ' ' + band);
// console.log(`${nombre} ${band}`);
// console.log(`${1+5}`);

// let nombreYband = nombre + ' ' + band;
// let nombreTemplate = `${nombre}${band}`;

// console.log(nombreTemplate === nombreTemplate);

function getNombre() {
    return `${nombre} es ${band}`;
}

console.log(`La bande de : ${getNombre()}`);