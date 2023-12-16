let arr = [];

arr.push(null);
for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}

arr.splice(19);
arr.push(null);

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}