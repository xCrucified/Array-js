let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 2, 4, 5];

function hasIdenticalElements(arr) {
    let uniqueElements = new Set(arr);
    return uniqueElements.size !== arr.length;
}

console.log(hasIdenticalElements(arr));
console.log(hasIdenticalElements(arr2));