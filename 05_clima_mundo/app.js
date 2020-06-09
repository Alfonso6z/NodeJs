const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para optener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getCLima(19.419444444, -99.145555555)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const datosLugar = await lugar.getLugarLatLng(direccion);
        const datosClima = await clima.getCLima(datosLugar.lat, datosLugar.lng);
        return `El clima de ${datosLugar.direccion} es de ${datosClima}°C`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion}`
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);