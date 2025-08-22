import {showNumbersToN} from '../src/implementacao/1-showNumbersToN';

describe('showNumbersToN', () => {
    test('deve retornar um array com números de 0 a 5', () => {
        const entrada = 5;
        const esperado = [0, 1, 2, 3, 4, 5];
        const resultado = showNumbersToN(entrada);
        expect(resultado).toEqual(esperado);
    });
    test('deve retornar um array com números de 0 a 0', () => {
        const entrada = 0;
        const esperado = [0];
        const resultado = showNumbersToN(entrada);
        expect(resultado).toEqual(esperado);
    });
    test('deve retornar um array com 11 elementos ao receber 10', () => {
        const entrada = 10;
        const esperado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const resultado = showNumbersToN(entrada);
        expect(resultado).toHaveLength(11);
        expect(resultado).toEqual(esperado);
    });
});
