/* Задание 2 - округление и надежное сравнение дробных частей чисел */

/* Задаем два числа с дробной частью */
let digit1 = 1.690342;
let digit2 = 20.690211;

/* Задаем критерий точности */
let accuracyInterval = 3;

/* Выделяем дробную часть из чисел */
let fractionOfdigit1 = Math.floor((digit1 % 1) * Math.pow(10, accuracyInterval));
let fractionOfdigit2 = Math.floor((digit2 % 1) * Math.pow(10, accuracyInterval));

/* Выводим дробные части и результаты по операторам сравнения */
console.log('дробная часть числа 1 с учетом критерия точности',accuracyInterval,'=', fractionOfdigit1);
console.log('дробная часть числа 2 с учетом критерия точности',accuracyInterval,'=', fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'>',fractionOfdigit2,':',fractionOfdigit1 > fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'<',fractionOfdigit2,':',fractionOfdigit1 < fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'≥',fractionOfdigit2,':',fractionOfdigit1 >= fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'≤',fractionOfdigit2,':',fractionOfdigit1 <= fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'===',fractionOfdigit2,':',fractionOfdigit1 === fractionOfdigit2);
console.log('Результат сравнения дробных частей:',fractionOfdigit1,'!==',fractionOfdigit2,':',fractionOfdigit1 !== fractionOfdigit2);
