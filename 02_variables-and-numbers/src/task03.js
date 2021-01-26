/* Генератор случайных нечетных чисел в интервале от любых n до любых m */
let m = 3;
let n = 100;

let intervall = Math.abs(n - m);
let startIntervall = Math.min(m, n);

let zufallzahl = Math.floor(((Math.random() * intervall + startIntervall) / 2)) * 2 + 1;
console.log(zufallzahl);
