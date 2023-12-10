let numb = +prompt('Enter any symbol u want');
if (numb >= 0 && numb <= 9) {

    switch (numb) {
        case 0:
            console.log(')');
            break;
        case 1:
            console.log('!');
            break;
        case 2:
            console.log('@');
            break;
        case 3:
            console.log("#");
            break;
        case 4:
            console.log("$");
            break;
        case 5:
            console.log("%");
            break;
        case 6:
            console.log("^");
            break;
        case 7:
            console.log("&")
            break;
        case 8:
            console.log("*");
            break;
        case 9:
            console.log("(");
            break;
    }
}
else{
    console.warn("Error number!!!");
}