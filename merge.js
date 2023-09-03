function sortMerge (arr) {
    if (arr.length === 0) return "Provide an array" //if array is empty return string
    if (arr.length === 1) return 1; // if array has 1 index return 1

    const middle = Math.floor(arr.length / 2); // middle is equals to the array length divide by 2
    const left = arr.slice(0, middle); //left half of the array is divided
    const right = arr.slice(middle, arr.length) // right half of the array is divided

}