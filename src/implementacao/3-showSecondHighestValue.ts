export function showSecondHighestValue(numbers: number[]): number {

    if (numbers.length < 2) {
        throw new Error("O array deve conter pelo menos dois números.");
    }

    let highest = numbers[0];
    let secondHighest = numbers[0];

    for(const num of numbers) {
        if(num>highest){
            highest = num
        }
    }

    let foundSecond = false;

    for(const num of numbers) {
        if(num<highest && num>secondHighest){
            secondHighest = num
            foundSecond = true;
        }if(num<highest && secondHighest === highest){
            secondHighest = num
            foundSecond = true;
        }
    }

    if (!foundSecond) {
        throw new Error("Não foi possível encontrar um segundo numero.");
    }
    
    return secondHighest;
    
}
