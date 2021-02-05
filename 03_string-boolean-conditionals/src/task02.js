/* Задание 2 - преобразование написания двух переменных с именем и фамилией в корректный регистр с выведением корректного написания имени и информации, было ли оно преобразовано */

let defaultName = 'GaBourEy';
let defaultSurname = 'siDiBe';

let correctName = `${(defaultName.substr(0, 1)).toUpperCase()}${(defaultName.substr(1)).toLowerCase()}`;
let correctSurname = `${(defaultSurname.substr(0, 1).toUpperCase())}${(defaultSurname.substr(1)).toLowerCase()}`;

console.log(correctName, correctSurname);

let status = '';

if (defaultName === correctName && defaultSurname === correctSurname) {
    status = 'Имя и фамилия остались без изменений';
} else if (defaultName === correctName && defaultSurname !== correctSurname) {
    status = 'Имя осталось без изменений, Фамилия была преобразована';
} else if (defaultName !== correctName && defaultSurname === correctSurname) {
    status = 'Имя было преобразовано, Фамилия осталась без изменений';
} else if (defaultName !== correctName && defaultSurname !== correctSurname) {
    status = 'Имя и Фамилия были преобразованы';
} 

console.log(status);
