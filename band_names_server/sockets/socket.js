const {io} = require('../index');
const Bands = require('../models/bands');
const Band = require('../models/band');

const bands = new Bands();
bands.addBand(new Band('Van Halen'));
bands.addBand(new Band('Quuen'));
bands.addBand(new Band('Rolling Stone'));
bands.addBand(new Band('Led Zeppelin'));
bands.addBand(new Band('Pink Floyd'));

// console.log(bands);

// NOTE: Mensajes Sockets
io.on('connection',client => {
    console.log('Cliente conectado');
    client.emit('activeBands',bands.getBands());
    client.on('disconnect',()=>{
        console.log('Cliente desconectado');
    });
    client.on('mensaje',(payload)=>{
        console.log(`Mensaje: ${payload}`);
    });

    client.on('emitirMensaje',(payload)=>{
        client.broadcast.emit('nuevoMensaje',payload);
    });

    client.on('voteBand',(payload)=>{
        bands.voteBand(payload.id);
        io.emit('activeBands',bands.getBands());
    });

    client.on('addBand',(payload)=>{
        const band = new Band(payload.name);
        bands.addBand(band);
        io.emit('activeBands',bands.getBands());
    });
    client.on('deleteBand',(payload)=>{
        bands.deleteBand(payload.id);
        io.emit('activeBands',bands.getBands());
    });

});


