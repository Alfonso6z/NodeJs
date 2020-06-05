const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }
        console.log(`=====================`.green);
        console.log(`Tala del ${base}`.green);
        console.log(`=====================`.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`.rainbow);
        }
    });
}


let crearArchivo = (base, limite = 10) => { /*  podria  agregarce al module asi **module.exports.crearArchivo = (base) =>{...} */
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}`)
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}