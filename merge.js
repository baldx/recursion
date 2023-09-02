const list = [
    [5],
    [6],
    [4],
    [3],
    [7],
    [2],
    [9],
    [8],
];

function mergeSort (first, last) {

    let middle = Math.round((first + last) / 2);

    console.log(middle);
    
//     if (first < last) {
        
//         console.log(middle)
//         mergeSort(first, middle)

//     } else console.log("a");;
}

mergeSort(list.indexOf(list[0]), list.indexOf(list[7]));
