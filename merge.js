function sortMerge (arr) {
    if (arr.length === 0) return "Provide an array" //if array is empty return string
    if (arr.length === 1) return arr; // if array has 1 index return 1

    const middle = Math.floor(arr.length / 2); // middle is equals to the array length divide by 2
    const left = arr.slice(0, middle); //left half of the array is divided
    const right = arr.slice(middle, arr.length) // right half of the array is divided

    return merge(sortMerge(left), sortMerge(right));
}

const merge = (left, right) => {
    
    const result = []; //declare result as an empty array so it can merge the incoming arrays

    let iL = 0; //declare first index 0 which will be used for the left side
    let iR = 0;  //declare last index 0 which will be used for the right side

    while (iL < left.length && iR < right.length) { //add a while loop to check condition if both halves are smaller than iL & rL

        if (left[iL] < right[iR]) { // if statement to check when left part is done
            result.push(left[iL]); //push the number into the empty array
            iL++; // increment the number by 1
        } else {
            result.push(right[iR]); //when left side is done push right half of numbers
            iR++; //increment by 1
        }
    }

    while (iL < left.length) { //if first index of iL is shorter than length of left
        result.push(left[iL]); //push to results
        iL++; //increment by 1
    }

    while (iR < right.length) { //if first index of iR shorter tan right length
		result.push(right[iR]); //push iR to result
		iR++; //increment by 1
	}

    return result; //return
};

console.log(sortMerge([10, 7, 8, 9, 1, 5]))