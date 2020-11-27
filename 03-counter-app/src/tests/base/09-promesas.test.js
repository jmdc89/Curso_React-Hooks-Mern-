
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe('Pruebas de promesas', () => {

    // Hay que mandar el done en tareas asincronas!!!!!!

    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });


})