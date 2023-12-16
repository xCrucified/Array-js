let arr = []
let n = 1;

for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}

arr.splice(10,10);

for (let i = 0; i < 10; i++) {
    arr.push(0);
}

for (let i = 0; i < arr.length; i++) {
    console.log(`${n}: ${arr[i]}`);
    n++;
}