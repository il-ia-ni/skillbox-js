// v2 Задание 3 - Движение танка по массиву boolean-мин с уничтожением танка и прекращением движения после наезда на 2 мины

let roadMines = [false, true, true, false, true, true, true, true, true, true];
let tankPosition = 0;

let livesCounter = 3;

while (tankPosition < roadMines.length) {
    console.log(`Танк перемещается на ${tankPosition + 1}...`);
    if (roadMines[tankPosition] === false) { // Проверка попадания на мину
        livesCounter--;
        if (livesCounter > 0) { // Проверка оставшихся жизней после попадания на мину и вычитания 1 жизни
            console.log(`Танк повреждён! Движение продолжается.`);
        } else {
            console.log(`Танк уничтожен. Движение прекращено!`);
            break; // В случае нуля оставшихся жизней останавливает весь цикл do-if-if
        }
    }
    tankPosition++; // приращение позиции (шаг) танка идет после цикла do-if-if (только в случае успешно завершенного цикла), т.к. первая позиция в массиве имеет индекс 0
    if (tankPosition === roadMines.length) { // выводится только один раз несмотря на количество итераций цикла
        console.log(`Ура! Танк успешно достиг конца дороги!`);
    }
}