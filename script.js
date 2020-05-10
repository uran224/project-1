// 'use strict';
// let answer = prompt ("Do you see this?", "Yes");

let money = prompt("Ваш бюджет на месяц, руб.", 40000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-09");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", "Dolgam.net"),
    answer_2 = prompt("Во сколько обойдётся?", 15000),
    answer_3 = prompt("Введите обязательную статью расходов в этом месяце", "Квартплата"),
    answer_4 = prompt("Во сколько обойдётся?", 5500);

    appData.expenses[answer_1] = answer_2;
appData.expenses[answer_3] = answer_4;


alert ("Ваш бюджет на 1 день "+ Math.floor(appData.budget / 30) + " рублей!");
