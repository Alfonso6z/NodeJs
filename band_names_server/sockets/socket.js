const {io} = require('../index');



// NOTE: Mensajes Sockets
io.on('connection',client => {
    console.log('Cliente conectado');
    client.on('disconnect',()=>{
        console.log('Cliente desconectado');
    });
    client.on('mensaje',(payload)=>{
        console.log(`Mensaje: ${payload}`);
        client.emit('mensaje',{admin:'Hola Pendejos'});
    });

});


