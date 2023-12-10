let year = +prompt('Enter random year');

console.log(year % 400 && year % 4 && year != 100 ? "Кратний" : "Не кратний");
