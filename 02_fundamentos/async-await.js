/**
 * Async Await
 */

/* let getNombre = async() => {

    // throw new Error('No existe un nombre para este usuario');

    return 'Alfonso';
} */

// NOTE: Consolo poner el async nos evitamos todo el codigo siguiente

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Alfonso6z');
        }, 3000)
    });
}

let saludo = async() => {

    let nombre = await getNombre()
    return `Hola ${nombre}`;
}

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log('Error de ASYNC', err);
// })

saludo().then(mensaje => {
    console.log(mensaje);
})