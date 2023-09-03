function sortMerge (arr) {
    if (arr.length === 0) return "Provide an array" //if array is empty return string
    if (arr.length === 1) return 1; // if array has 1 index return 1

    const middle = Math.floor(arr.length / 2); // middle is equals to the array length divide by 2
    const left = arr.slice(0, middle); //left half of the array is divided
    const right = arr.slice(middle, arr.length) // right half of the array is divided

}

function merge (left, right) {
    const result = []; //declare result as an empty array so it can merge the incoming arrays

    let iL = 0;
    let iR = 0;

    while (iL < left.length && iR < right.length) {
        if (left[iL] < right[iR]) {
            
        }

    }
}