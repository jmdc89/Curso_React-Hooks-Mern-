
// Funciones en JS

// Esta forma de escribir la función tiene el problema
// de que podemos llamar una vadiable con el mismo nombre por error

// function saludar( nombre ) {
//     return `Hola, ${ nombre}`;
// };

const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
};

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;



// console.log( saludar('Goku) )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'El_Papi1502'
//     }
// }

//Devolver el valor de forma implícita
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user = getUser();
console.log(user);

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

console.log( getUsuarioActivo('Jose'));