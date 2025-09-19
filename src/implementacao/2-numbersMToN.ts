export function showNumbersBetween(M: number, N: number): number[] {
    
    const numeros: number[] = [];
    
    if (M < N) {
        for (let i = M; i <= N; i++){
            console.log(i);
            numeros.push(i);
        }
        return numeros;
    }else{
        throw new Error("M deve ser menor que N");
    }   
}
