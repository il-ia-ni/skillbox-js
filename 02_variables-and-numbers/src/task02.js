/* Задание 2 - округление и надежное сравнение дробных частей чисел */
let zff1 = 13.890123;
let zff2 = 2.891564;
let i = 2;

let dezimalbruch1 = Math.floor((zff1 % 1) * Math.pow(10, i));
let dezimalbruch2 = Math.floor((zff2 % 1) * Math.pow(10, i));

console.log('дробная часть числа 1 с учетом критерия точности',i,'=', dezimalbruch1);
console.log('дробная часть числа 2 с учетом критерия точности',i,'=', dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'>',dezimalbruch2,':',dezimalbruch1 > dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'<',dezimalbruch2,':',dezimalbruch1 < dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'≥',dezimalbruch2,':',dezimalbruch1 >= dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'≤',dezimalbruch2,':',dezimalbruch1 <= dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'===',dezimalbruch2,':',dezimalbruch1 === dezimalbruch2);
console.log('Результат сравнения дробных частей:',dezimalbruch1,'!==',dezimalbruch2,':',dezimalbruch1 !== dezimalbruch2);
