/* Задание 2 - преобразование написания двух переменных с именем и фамилией в корректный регистр с выведением корректного написания имени и информации, было ли оно преобразовано */

let defaultName = 'BenedicT';
let defaultSurname = 'CumberBatch';

let tempNameFirstLetter = defaultName.substr(0, 1); // Извлекаем из строки имени подстроку начиная с индекса 0, длина извлечения - 1 символ
let tempNameOtherLetters = defaultName.substr(1); // Извлекаем из строки имени подстроку начиная с индекса 1, длина извлечения - все символы до конца строки
let tempSurnameFirstLetter = defaultSurname.substr(0, 1); // Извлекаем из строки имени подстроку начиная с индекса 0, длина извлечения - 1 символ
let tempSurnameOtherLetters = defaultSurname.substr(1); // Извлекаем из строки имени подстроку начиная с индекса 1, длина извлечения - все символы до конца строки

let capitalNameFirstLetter = tempNameFirstLetter.toUpperCase(); // имя - делаем первую букву прописной
let smallNameOtherLetters = tempNameOtherLetters.toLowerCase(); // имя - делаем остальные буквы строчными
let capitalSurnameFirstLetter = tempSurnameFirstLetter.toUpperCase(); // фамилия - делаем первую букву прописной
let smallSurameOtherLetters = tempSurnameOtherLetters.toLowerCase(); // фамилия - делаем остальные буквы строчными

let correctName = `${capitalNameFirstLetter}${smallNameOtherLetters}`;
let correctSurname = `${capitalSurnameFirstLetter}${smallSurameOtherLetters}`;

console.log(correctName, correctSurname);

if (defaultName === correctName && defaultSurname === correctSurname) {
    let status = 'Имя и фамилия остались без изменений';
    console.log(status);
} else if (defaultName === correctName && defaultSurname !== correctSurname) {
    let status = 'Имя осталось без изменений, Фамилия была преобразована';
    console.log(status);
} else if (defaultName !== correctName && defaultSurname === correctSurname) {
    let status = 'Имя было преобразовано, Фамилия осталась без изменений';
    console.log(status);
} else if (defaultName !== correctName && defaultSurname !== correctSurname) {
    let status = 'Имя и Фамилия были преобразованы';
    console.log(status);
}
