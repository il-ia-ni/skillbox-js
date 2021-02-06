// Задание 2 - возвращать произвольную строку с перевернутыми в ней в обратном порядке с помощью цикла словами

let originalString = 'Привет, мир!';
let reversedSymbolsArray = [];

for (i = 0; i < originalString.length; i++) { // Вовзращаемый тип Undefined при извлечении в массив символа с несуществующим индексом строки превращается в пустую строку '' при объединении массива в новую строку через .join(). Но лучше, чтобы в массиве не было лишних элементов, поэтому в условии for () i не должен равняться длине originalString
    let letterEjected = originalString[i];
    reversedSymbolsArray.unshift(letterEjected);
    // console.log(`Символ ${letterEjected} добавлен во временный массив`);
}
// console.log('Временный массив выглядит следущим образом:\n', reversedSymbolsArray);

let reversedString = reversedSymbolsArray.join(''); // Параметр separator Пустая строка '' в скобках метода объединения э-тов массива в строку .join() указывает, что при объединении между элементами не должно быть разделителя (по умолчанию - запятая). 

console.log(`Заданная произвольная строка:\n ${originalString}\nПеревернутая строка выглядит следущим образом:\n ${reversedString}`);