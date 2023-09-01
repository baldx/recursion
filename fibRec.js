const fibRec = n => {
    const array = [0, 1];

    if (n <= 0) return "Enter a valid number"
    if (n === 1) return [0];
    if (n === 2) return array;

    return [...fibRec(n -  1), fibRec(n - 1)[n - 2] + fibRec(n - 1)[n - 3]]
}

console.log(fibRec(4));