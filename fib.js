const fib = n => {
    const array = [0, 1];
    
    if (n <= 0) return "Enter a valid number"
    if (n === 1) return [0];
    if (n === 2) return array;

    for (let i = 2; i < n; i++) 
        array.push(array[array.length-2] + array[array.length-1]);
        
    return array;
    

    
}

console.log(fib(8))

// give previous 2 numbers a variable name
// next number = add previous 2 variables