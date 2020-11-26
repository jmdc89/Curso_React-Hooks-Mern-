import React from 'react';
import PropTypes from 'prop-types';

// FC
const PrimeraApp = ( { saludo, subtitulo} ) => {

    return (
        <>
        <h1> { saludo }</h1>
        {/* {<pre> { JSON.stringify( saludo, null, 3) }</pre>} */}
        <p>Mi primera aplicación</p>
        </>
    );
}

//De esta forma se obliga a enviar al componente las propiedades necesarias
// PrimeraApp.PropTypes = {
//     saludo: PropTypes.string.isRequired
// }

PrimeraApp.defaultProps = {
    saludo: 'Hola Mundo',
    subtitulo: 'Soy un subtítulo'
}


export default PrimeraApp;