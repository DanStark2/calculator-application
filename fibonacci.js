export function fibonacci(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}