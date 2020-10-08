import Server from './server/server';
import router from './router/router';
import MySQL from './sql/mysql';

const server = Server.init(3000);

// MySQL.instance;
server.app.use(router);

server.start(()=>{
    console.log('Servidor Corriendo en el puerto 3000');
});
