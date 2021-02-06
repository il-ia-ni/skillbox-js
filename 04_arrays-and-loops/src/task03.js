// Движение танка по массиву boolean-mean с уничтожением танка и прекращением движения после наезда на 2 мины

let roadMines = [true, false, true, true, true, true, true, false, true, false];

let tankPosition;

for (tankPosition = 0; tankPosition < roadMines.length; tankPosition++) {
    let eachStep = true; // для движения по циклу ищем незаминированные поля
    if (eachStep === roadMines[tankPosition]) { // условие выполняется 1 до конца цикла for, если на пути танка нет мин
        console.log(`танк переместился на ${tankPosition + 1}`);
    } else if (eachStep !== roadMines[tankPosition]) { // альтернативное условие 2 выполняется при встрече первой мины и открывает внутренний цикл while поиска второй мины
        console.log(`танк переместился на ${tankPosition + 1}. Танк повреждён`);
        eachStep = false; // для прекращения всего цикла ищем поле со вторуой миной
        tankPosition++; // т.к. в цикл for больше не возвращаемся, после первой мины переходим на следущий шаг перед открытием вн. цикла while
        while (tankPosition < roadMines.length) { // вн.цикл выполняется, пока не дойдем до края массива
            if (eachStep !== roadMines[tankPosition]) { // вн.условие 2.1 выполняется до конца цикла while, если на пути нет второй мины
                console.log(`танк переместился на ${tankPosition + 1}`);
                ++tankPosition; // продолжаем делать 1 шаг после незаминированного поля
            } else { // иначе 2.2, если на пути вторая мина, останавливаем цикл while
                console.log(`танк переместился на ${tankPosition + 1}. Танк уничтожен. Движение прекращено`);
                break;
            }
        }
        break; // Чтобы уничтоженный танк не двигался дальше, останавливаем всё альтернативное условие 2 цикла for. Цикл for завершается полностью.
    }
}