function minSteps(n: number): number {
    let steps = 0;
    let divisor = 2;

    while (n > 1) {
        while (n % divisor === 0) {
            steps += divisor;
            n /= divisor;
        }
        divisor++;
    }

    return steps;
}
