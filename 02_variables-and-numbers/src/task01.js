/* Задание 1 - площадь прямоугольника по координатам двух точек на его противоположных углах */

/* Координаты точки 1 */
let x1 = 2;
let y1 = 7;

/* Координаты точки 2 */
let x2 = 5;
let y2 = 5;

/* Построение катетов прямоугольного треугольника */
let cathetusX = Math.abs(x1 - x2);
let cathetusY = Math.abs(y1 - y2);

/* Расчет площади прямоугольника по катетам треугольника */
let squareAreaRectangle = cathetusX * cathetusY;
console.log('Площадь треугольника =', squareAreaRectangle);
