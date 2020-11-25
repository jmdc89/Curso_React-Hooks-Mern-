
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log ( personajes[0] );
// console.log ( personajes[1] );
// console.log ( personajes[2] );

const [ p1 ] = personajes;
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;

console.log(p1, p2, p3);

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const tarea = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo')} ];
};

const arr = tarea( 'Goku ');
const [nombre, setNombre] = tarea('Goku');

console.log( nombre );
setNombre();
