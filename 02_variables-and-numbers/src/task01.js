/* Задание 1 - площадь прямоугольника по координатам двух точек на его противоположных углах */
let x1 = 2;
let y1 = 7;
let x2 = 5;
let y2 = 5;

let katheteX = Math.abs(x1 - x2);
let katheteY = Math.abs(y1 - y2);

let flaecheRE = katheteX * katheteY;
console.log('Площадь треугольника =', flaecheRE);
