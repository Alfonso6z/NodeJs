const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza eñ estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', "Borra una tarea por hacer", {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado,
    })
    .help()
    .argv;

module.exports = {
    argv
}