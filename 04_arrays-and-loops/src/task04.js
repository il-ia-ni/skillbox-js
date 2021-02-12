// v2 Задание 4 - Вывод дней месяца с последовательными днями недели 

let january = [];

for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
    january.push(dayNumber);
}

let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let firstDayOfMonth = Math.round(Math.random() * 7 + 0); // Считаем произвольный индекс дня недели, произв число от 0 вкл до 7 невкл

for (i = 0; i < january.length; i++) {
    console.log(`${january[i]} января это ${daysOfWeek[(firstDayOfMonth) % 7]}`); // При целочисленном делении на 7 растущего индекса дня месяца в массиве january остаток от целого числа всегда будет равен индексу дня недели в массиве daysOfWeek
    firstDayOfMonth++;
}