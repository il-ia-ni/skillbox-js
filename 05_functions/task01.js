// Функция, создающия массив email-адресов, не попавших в черный список

let emailGeneralList = [
    'info@pochtabank.ru',
    'kirill@mail.ru',
    'liyba.ivanova@mail.ru',
    'promo@mvideo.ru',
    'belka.strelka@ya.ru',
    '145764@mlv.gfx.cn',
    'mailing@alibaba.cn',
    'info@gap.com',
    'oksanawhite@yahoo.com',
];

let emailBlacklist = [
    'info@pochtabank.ru',
    'promo@mvideo.ru',
    '145764@mlv.gfx.cn',
    'mailing@alibaba.cn',
    'info@gap.com',
]

function filterGeneralList(arrGeneral, arrBlack) {
    let filteredWhitelist = [];
    for (let item of arrGeneral) {
        if (arrBlack.includes(item) == false) {
            filteredWhitelist.push(item);
        } else continue;
    }
    console.log(`Из указанной базы данных в черный список не входят: \n`, filteredWhitelist);
}

filterGeneralList(emailGeneralList, emailBlacklist);

export default {filterGeneralList};