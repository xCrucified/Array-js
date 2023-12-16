let arr = []


for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}
console.log('--------------------');
arr.sort((b, a) => a - b);
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}




