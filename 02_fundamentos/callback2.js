let musicos = [{
    id: 1,
    nombre: 'Eddie',
}, {
    id: 2,
    nombre: 'Alex',
}, {
    id: 3,
    nombre: 'Roth',
}];

let salarios = [{
    id: 1,
    salario: 3000,
}, {
    id: 2,
    salario: 4500
}];


let getMusico = (id, callback) => {

    let musicoDB = musicos.find(musico => musico.id === id)
        // console.log(musicoDB);
    if (!musicoDB) {
        callback(`No existe el musico con el ID ${id}`)
    } else {
        callback(null, musicoDB);
    }
}

let getSalario = (musico, callback) => {
    let salarioDB = salarios.find(salario => salario.id === musico.id)
    if (!salarioDB) {
        callback(`No se encontro un salario para el musico: ${musico.nombre}`)
    } else {
        callback(null, {
            nombre: musico.nombre,
            salario: salarioDB.salario,
            id: musico.id
        })
    }
}

getMusico(3, (err, musico) => {
    if (err) {
        console.log(err);
    }
    getSalario(musico, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
});