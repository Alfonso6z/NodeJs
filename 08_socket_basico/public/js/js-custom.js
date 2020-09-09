var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// NOTE: Escuchar
socket.on('disconnect', function() {
    console.log('perdimos la conexión con el servidor');
});
// NOTE: Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Alfonso',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

// NOTE: Escuchar 
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});