console.log('Inicip del programa');

// ejecuta un callback en determinado tiempo 
setTimeout(function() {
    console.log('Primer Timeout');
}, 3000); /* milisegundos */

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);

setTimeout(function() {
    console.log('Tercer Timeout');
}, 0);