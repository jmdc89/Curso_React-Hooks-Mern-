
// Desestructuración
// Asignación Desestrcturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre } = persona;

//Si ya tenemos una variable que se llame nombre
// podemos renombrarla de la siguiente manera:
// const { nombre:nombre2 } = persona;

// console.log( nombre2 );
// console.log( persona.nombre);
// console.log( persona.edad);
// console.log( persona.clave);

const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

// const retornaPersona = ( usuario ) => {
//     const { edad, clave, nombre } = usuario;
//     console.log( edad, clave, nombre);
// }

// retornaPersona (persona);

//Desestructuración en el argumento

const retornaPersona = ( {nombre, edad} ) => {
    console.log( edad, nombre);
}

//Puedo asignar valores por defecto (se sobreescribe si el objeto
// tiene la propiedad)

const retornaPersona2 = ( {nombre, edad, rango = 'Capitán'} ) => {
    console.log( edad, nombre, rango);
};

const avenger = ({ clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    };
};

const { nombreClave, anios, latlng: { lat, lng} } = avenger( persona );
console.log(nombreClave, anios);
console.log( lat, lng);

