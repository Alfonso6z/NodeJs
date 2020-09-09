const { io } = require('../server')


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido A esta App'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // NOTE: Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {


        console.log(data);

        client.broadcast.emit('enviarMensaje', data);



        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo Ok',
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo Salio mal!!!!!!!!',
        //     });
        // }
    });
});