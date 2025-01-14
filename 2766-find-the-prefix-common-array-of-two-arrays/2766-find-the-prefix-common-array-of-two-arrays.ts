function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const setA = new Set<number>();
    const setB = new Set<number>();
    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        setA.add(A[i]);
        setB.add(B[i]);

        let commonCount = 0;
        for (const num of setA) {
            if (setB.has(num)) {
                commonCount++;
            }
        }
        result.push(commonCount);
    }

    return result;
};