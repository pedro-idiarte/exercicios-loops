export function average(
  aluno1: number[],
  aluno2: number[],
  aluno3: number[]
): string[] {

  const resultados: string[] = [];

  const alunos = [aluno1, aluno2, aluno3]; 
  
  for (let i = 0; i < alunos.length; i++) {
    const notas = alunos[i];
    let soma = 0;
    for (let j = 0; j < notas.length; j++) {
      soma += notas[j];
    }
    const media = soma / notas.length;
    if (media >= 7) {
      resultados.push(`Aluno ${i + 1}: Passou`);
    }
    else if (media > 4 && media < 7) {
      resultados.push(`Aluno ${i + 1}: Recuperação`);
    } else {
      resultados.push(`Aluno ${i + 1}: Reprovado`);
    }
  }

  return resultados;
}