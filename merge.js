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


    if (first < last) {
        let middle = (first + last) / 2;
        mergeSort(first, middle);
    }
}

mergeSort(list.indexOf(list[1]), list.indexOf(list[7]));
