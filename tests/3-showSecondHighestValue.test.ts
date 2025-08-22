import { showSecondHighestValue } from '../src/implementacao/3-showSecondHighestValue';

describe('showSecondHighestValue', () => {
    test('deve retornar o segundo maior valor de um array de números', () => {
        expect(showSecondHighestValue([10, 25, 3, 18])).toBe(18);
    });

    test('deve retornar o segundo maior valor quando o maior se repete', () => {
        expect(showSecondHighestValue([5, 5, 5, 3])).toBe(3);
    });

    test('deve lançar erro para array com menos de 2 elementos', () => {
        expect(() => showSecondHighestValue([10])).toThrow("O array deve conter pelo menos dois números.");
    });

    test('deve retornar 99 para o array [50, 100, 99, 80]', () => {
        expect(showSecondHighestValue([50, 100, 99, 80])).toBe(99);
    });

    test('deve lançar erro quando todos os elementos são iguais', () => {
        expect(() => showSecondHighestValue([5, 5, 5])).toThrow("Não foi possível encontrar um segundo numero.");
    });
});
