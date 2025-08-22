import {showNumbersBetween} from '../src/implementacao/2-numbersMToN';

describe('showNumbersBetween', () => {
    test('deve retornar números entre 3 e 7', () => {
        const resultado = showNumbersBetween(3, 7);
        const esperado = [3, 4, 5, 6, 7];

        expect(resultado).toEqual(esperado);
        expect(resultado).toHaveLength(5);
        expect(resultado[0]).toBe(3);
        expect(resultado[resultado.length - 1]).toBe(7);
    });

    test('deve retornar números entre 0 e 2', () => {
        const resultado = showNumbersBetween(0, 2);

        expect(resultado).toEqual([0, 1, 2]);
        expect(resultado).toHaveLength(3);
    });

    test('deve lançar erro se M >= N', () => {
        expect(() => showNumbersBetween(5, 5)).toThrow("M deve ser menor que N");
        expect(() => showNumbersBetween(6, 2)).toThrow();
    });
});
