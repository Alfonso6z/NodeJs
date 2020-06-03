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


let getMusico = (id) => {
    return new Promise((resolve, reject) => {
        let musicoDB = musicos.find(musico => musico.id === id)
            // console.log(musicoDB);
        if (!musicoDB) {
            reject(`No existe el musico con el ID ${id}`)
        } else {
            resolve(musicoDB);
        }
    });
}

let getSalario = (musico) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === musico.id)
        if (!salarioDB) {
            reject(`No se encontro un salario para el musico: ${musico.nombre}`)
        } else {
            resolve({
                nombre: musico.nombre,
                salario: salarioDB.salario,
                id: musico.id
            })
        }
    });
}

// getMusico(1).then(musico =>
//     getSalario(musico).then(
//         resp => console.log(`El Salario de ${resp.nombre} es de ${resp.salario}$`),
//         (err) => console.log(err)),
//     (err) => console.log(err));

getMusico(3).then(musico => {
    return getSalario(musico);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
}).catch(err => {
    console.log(err);
})