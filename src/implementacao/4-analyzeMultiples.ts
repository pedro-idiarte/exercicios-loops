export function analyzeMultiples (numeros: number[]) {
  const multiplos2e5: number[] = [];
  const multiplos2e3: number[] = [];

  for (const numero of numeros) {
    if (numero === -1) {
      break;
    }
    if (numero % 2 === 0 && numero % 5 === 0) {
      multiplos2e5.push(numero);
    }
    if (numero % 2 === 0 && numero % 3 === 0) {
      multiplos2e3.push(numero);
    }
  }

  return { multiplos2e5, multiplos2e3 };
}

