export function fakultet(tall) {
    if (typeof tall !== 'number') return 1;
    if (tall <= 0) return 1;
    let result = 1;
    for (let i = 2; i < tall; i++) result *= i;
    return result;
}