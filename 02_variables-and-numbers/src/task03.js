/* Генератор случайных нечетных чисел в интервале от любых n до любых m */

/* Задаем произвольные значения m и n */
let m = 3;
let n = 100;

/* Находим величину интервала между m и n в абсолютном выражении + определяем начало интервала по минимальному значению */
let intervalLength = Math.abs(n - m);
let intervalStart = Math.min(m, n);

/* Расчет произвольного нечетного числа через умножение произвольного числа от 0 до 1 на величину интервала; прибавление начала интервала; Для получения строго нечетного числа деленим получившееся число из промежутка на 2; округляем его до минимального целого числа; умножаем на 2 ля получения четного числа и прибавляем 1. */
let unevenRandomDigit = Math.floor(((Math.random() * intervalLength + intervalStart) / 2)) * 2 + 1;

console.log(unevenRandomDigit);