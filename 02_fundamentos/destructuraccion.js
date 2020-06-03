let eddie = {
    nombre: 'Eddie',
    apellido: 'Van Halen',
    musico: 'Guitarrista',
    getNombre: function() { /* otra forma de escribir esta lina: getNombre(){ */
        return `${this.nombre} ${this.appellido} - ${this.musico}`
    }
};

// console.log(eddie.getNombre());

// Para optener las propiedades del objeto se podria hacer de la siguiente manera:
/* let nombre = eddie.nombre;
let apellido = eddie.apellido;
let musico = eddie.apellido; */

// Haciendo las 3 declaraciones usando la destructuracion:
/* let { nombre, apellido, musico } = eddie;
console.log(nombre, apellido, musico); */


//  Si quieren camiar el nombre de la variable seria asi:
let { nombre: primerNombre, apellido, musico } = eddie;
console.log(primerNombre, apellido, musico);