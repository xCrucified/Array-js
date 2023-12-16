// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// • початкове значення
// • кінцеве значення
// а на виході повертає масив із діапазоном цих значен(ь реалізувати достатньо лише
// із числовими значеннями)

let arr = [];

function createArray(start, end) {
    return Array.from({ length: end - start + 1 }, () => Math.round(Math.random() * 100));
}

let res = createArray(1, 5);

console.log(res);