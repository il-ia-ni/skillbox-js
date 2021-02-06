// Вывод дней месяца с последовательными днями недели 

let january = [];

for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
    january.push(dayNumber);
}

let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let firstDayOfMonth = Math.round(Math.random() * 7 + 0); // Считаем произвольный индекс дня недели, произв число от 0 вкл до 7 невкл

for (i = 0; i < january.length; i++) {
    console.log(`${january[i]} января это ${daysOfWeek[(firstDayOfMonth)]}`); // Начинаем выведение дня недели для первого числа с произвольным индексом от 0 до 6 
    if (firstDayOfMonth < (daysOfWeek.length - 1)) { // Если произвольный индекс меньше последнего индекса массива дней недели (< 6), то прибавляем +1 к произвольному индексу и переходим на след итерацию цикла for
        firstDayOfMonth++;
    } else {firstDayOfMonth = 0}; // в противном случае обнуляем произвольный индекс дня недели и переходим на следущую итерацию цикла for
}