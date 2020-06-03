// funcion convencional
function sumar(a, b) {
    return a + b;
}
// funcion de flecha
let sumar2 = (a, b) => a + b;

console.log(sumar(10, 20));
console.log(sumar2(60, 20));

// funcion convencional
function saludar() {
    return 'Hola Mundo'
}

// funcion de flecha
let saludar2 = () => 'Hola Mundo';

console.log(saludar());
console.log(saludar2());


function saludar3(nombre) {
    return `Hola ${nombre}`;
}
let saludar4 = nombre => `Hola ${nombre}`;

console.log(saludar3('Alfonso'));
console.log(saludar4('Wolfy'));

let eddie = {
    nombre: 'Eddie',
    apellido: 'Van Halen',
    musico: 'Guitarrista',
    /* el valor del this en una funcion de flecha apunta a un valor fuera de esta función*/
    /* getNombre: function() { 
          return `${this.nombre} ${this.appellido} - ${this.musico}`
      } */
    /* con funcion de flecha seria de esta manera */
    getNombre() { return `${this.nombre} ${this.appellido} - ${this.musico}`; }
};
console.log(eddie.getNombre());