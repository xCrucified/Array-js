let arr = [];
let n = 1;
for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}
for (let i = 0; i < arr.length; i++) {
    console.log(`[${n}]: ${arr[i]}`);
    n++;
}
