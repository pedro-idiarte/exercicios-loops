export function showNumbersToN(N: number): number[] {
    const numeros: number[] = [];
    
    for (let i = 0; i <= N; i++){
        console.log(i);
        numeros.push(i);
        }

    return numeros;
}
