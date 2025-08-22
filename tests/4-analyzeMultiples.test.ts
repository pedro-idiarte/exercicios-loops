import {analyzeMultiples} from "../src/implementacao/4-analyzeMultiples";

describe('analiseMultiplos', () => {
    test('deve contar corretamente para [10, 15, 30, -1]', () => {
        const entrada = [10, 15, 30, -1];
        const esperado = {
            multiplos2e5: [10, 30],
            multiplos2e3: [30]
        };

        const resultado = analyzeMultiples(entrada);

        expect(resultado).toEqual(esperado);
        expect(resultado.multiplos2e5).toHaveLength(2);
        expect(resultado.multiplos2e3).toHaveLength(1);
    });

    test('deve contar corretamente para [6, 12, 20, 25, -1]', () => {
        const entrada = [6, 12, 20, 25, -1];
        const esperado = {
            multiplos2e5: [20],
            multiplos2e3: [6, 12]
        };

        const resultado = analyzeMultiples(entrada);

        expect(resultado).toEqual(esperado);
        expect(resultado.multiplos2e3).toBeGreaterThan;
    });

    test('deve contar corretamente para [15, 30, -1]', () => {
        const entrada = [15, 30, -1];
        const esperado = {
            multiplos2e5: [30],
            multiplos2e3: [30]
        };

        const resultado = analyzeMultiples(entrada);

        expect(resultado).toEqual(esperado);
        expect(resultado.multiplos2e5).toHaveLength(1);
        expect(resultado.multiplos2e3).toHaveLength(1);
    });
});
