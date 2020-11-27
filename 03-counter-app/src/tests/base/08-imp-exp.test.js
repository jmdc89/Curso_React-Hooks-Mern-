
import { getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', ( ) => {

    test('debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData);
    });

    test('debe de retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        //puedo usar Tobe porque undefined es un primitivo
        expect( heroe ).toBe( undefined );
    });

    // test('debe de retornar un arreglo con los héroes de DC', () => {

    //     const owner = 'DC';
    //     const sups = getHeroesByOwner( owner );

    //     const heroesData = heroes.filter( h => h.owner  === 'Marvel' );

    //     expect( heroes ).toEqual( heroesData );
    // });

    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const sups = getHeroesByOwner( owner ).length;

        console.log(sups);

        //puedo usar Tobe porque undefined es un primitivo
        expect( sups ).toBe ( 2 );
    });




})