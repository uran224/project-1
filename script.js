// 'use strict';
// let answer = prompt ("Do you see this?", "Yes");

var money = prompt("Ваш бюджет на месяц, руб.", 40000);
var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-09");

var appData = {
    budget: money,
    timeData: time,
    expensesObligatory: "",
    expensesOptional: "",
    extraIncome: [],
    savings: false

};

appData.expensesObligatory = prompt("Введите обязательную статью расходов в этом месяце", "Регулярный");
var expensesObligatorySum = prompt("Во сколько обойдётся?", 15000);

var expenses = {
    answer_1: appData.expensesObligatory,
    answer_2: expensesObligatorySum
};

var dailyBudget = Math.floor((appData.budget - expensesObligatorySum) / 30);

alert ("Ваш дневной бюджет не более "+ dailyBudget + " рублей!");




