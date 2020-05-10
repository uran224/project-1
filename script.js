// 'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц, руб.", '40000');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-05-10');

    while (isNaN(money) || money ==  ""  || money == null) {
        money = +prompt("Ваш бюджет на месяц, руб.", '');
    }
}
start(); 


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i=0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдётся?", '');
        
        if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null && 
        a != '' && b != '' & a.length < 50) {
            console.log("expenses done");
            appData.expenses[a] = b;
        } else {
            console.log("bad expenses data");
            i--;
        }
    }
}
chooseExpenses();


function detectDaybudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Ваш бюджет на 1 день "+ appData.moneyPerDay + " рублей!");
}
detectDaybudget();

function detectLevel() {
    if (appData.moneyPerDay <100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i=0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", ''),
            b = prompt("Во сколько обойдётся?", '');
        
        if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null && 
        a != '' && b != '' & a.length < 50) {
            console.log("OptExpenses done");
            appData.optionalExpenses[i+1] = b;
        } else {
            console.log("bad OptExpenses data");
            i--;
        }
    } 
}
chooseOptExpenses();

