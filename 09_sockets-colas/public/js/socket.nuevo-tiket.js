// Comando para estableser la conexión
var socket = io();
let label = $('#lblNuevoTicket');

// socket.on('connect', function() {
//     console.log('conectado al servidor');
// });

// socket.on('disconnect', function() {
//     console.log('Desconectado del servidor');
// });

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);
});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTiket) {
        label.text(siguienteTiket);
    });
});