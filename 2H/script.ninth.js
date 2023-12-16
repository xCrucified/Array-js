//Обрахувати кількість парних чисел в масиві.

let arr = [];
let res = 0;
for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
        res += arr[i];
    }
}
console.log(`Sum of array equals: ${res}`);