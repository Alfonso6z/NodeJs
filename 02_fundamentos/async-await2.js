/**
 * 
 * 
 */
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


let getMusico = async(id) => {
    let musicoDB = musicos.find(musico => musico.id === id)
        // console.log(musicoDB);
    if (!musicoDB) {
        throw new Error(`No existe el musico con el ID ${id}`)
    } else {
        return musicoDB;
    }
}

let getSalario = async(musico) => {
    let salarioDB = salarios.find(salario => salario.id === musico.id)
    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el musico: ${musico.nombre}`)
    } else {
        return {
            nombre: musico.nombre,
            salario: salarioDB.salario,
            id: musico.id
        };
    }
}

let getInformacion = async(id) => {
    let musico = await getMusico(id);
    let resp = await getSalario(musico);
    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}

getInformacion(3).then(mensaje => console.log(mensaje)).catch(err => console.log(err));