'use strict';


let money = +prompt("Ваш бюджет на месяц, руб.", 40000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-09");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i=0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдётся?", '');
    
    if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null 
    && a != '' && b != '' & a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad data");
        i--;
    }
};



appData.moneyPerDay = appData.budget / 30;

alert ("Ваш бюджет на 1 день "+ appData.moneyPerDay + " рублей!");

if (appData.moneyPerDay <100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
