
import { getHeroeById } from './bases/08-imp-exp';


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( ( )=> {

//         const p1 = getHeroeById(2);
//         resolve ( p1 );

//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( ( )=> {

            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }

        }, 2000)
    });

}

getHeroeByIdAsync(2)
    .then( console.log )
    // .then( heroe => console.log('Heroe', heroe))
    // .catch ( err => console.warn( err ));
    .catch( console.warn );