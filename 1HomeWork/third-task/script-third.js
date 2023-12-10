let x = 0;
let n = 1;

let negNumb = 0,
    posNumb = 0,
    nullNumb = 0,
    evenNumb = 0,
    oddNumb = 0;
for (let i = 0; i < 10; i++) {

    x = +prompt(`Enter number [${n}]:`);
    n++;
    if (x < 0) {
        negNumb++;
    }
    if(x == 0){
        nullNumb++;
    }
    else if (x > 0) {
        posNumb++;
    }
    else if (x % 2 != 0) {
        oddNumb++;
    }
    if (x !== 0 && x % 2 === 0) {
        evenNumb++;
    }
    else if (x !== 0 && x % 2 !== 0) {
        oddNumb++;
    }
   
}


alert(`Negative numbers:[${+negNumb}]\n
Positive numbers:[${+posNumb}]\n
Numbers equals zero:[${+nullNumb}]\n
Even numbers:[${+evenNumb}]\n
Odd numbers:[${+oddNumb}]`);