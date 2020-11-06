const { io } = require('../index');
const { comprobarJWT } = require('../token/jwt');
const {usuarioConectado,usuarioDesconectado,grabarMensaje} = require('../controller/socket');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    const [valido,uid] = comprobarJWT(client.handshake.headers['x-token']) 

    // NOTE: Verificar Auntentacación
    if(!valido){
        return client.disconnect();
    }
    // NOTE: Cliente Autenticado
    usuarioConectado(uid);

    // NOTE: Ingresar al usuario a una sala
    // Por necesitamos dos: Salas Global, Sala Individual

    client.join(uid);

    // NOTE: escuchar del cliente mensajePersonal

    client.on('mensajePersonal',async (payload)=>{
        await grabarMensaje(payload);        
        io.to(payload.para).emit('mensajePersonal',payload);
    });


    client.on('disconnect', () => {
        usuarioDesconectado(uid);   
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });

});
