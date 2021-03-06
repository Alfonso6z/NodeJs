const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (argv.completado === 'all') {
            for (let tarea of listado) {
                console.log('======Por Hacer======'.green);
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.completado);
                console.log('====================='.green);
            }
        }
        for (let tarea of listado) {
            if (argv.completado == `${tarea.completado}`) {
                console.log('======Por Hacer======'.green);
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.completado);
                console.log('====================='.green);
            }
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Comando no es reconocido');
}