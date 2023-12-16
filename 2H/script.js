const DateTime = new Date();
const Time = DateTime.getHours();

if (Time >= 5 && Time <= 12) {
    console.log('G morning');
}
else if (Time >= 12 && Time <= 18) {
    console.log('G day');
}
else if (Time >= 18 && Time <= 22) {
    console.log('G evening');
}
else {
    console.log('G night');
}
