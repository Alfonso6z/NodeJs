// //  esta funcion es un callback
// setTimeout(function() {
//     console.log('hola mundo');
// }, 2000);

// //  el mismo callback con funcion de flecha
// setTimeout(() => {
//     console.log('hola mundo =>');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Wolfy',
        id
    }
    if (id == 20) {
        callback(`el usuario con Id ${id}, no existe en la BD`)
    } else {

        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Usuario de base de datos`, usuario);
});