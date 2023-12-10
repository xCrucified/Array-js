let a = +prompt('Enter first number');
let b = +prompt('Enter second number');

let res = 0;

for (let i = a; i <= b; i++) {
    res += i;
}


console.log(`Answear: ${res}`);