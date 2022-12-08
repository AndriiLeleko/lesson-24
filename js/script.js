"use strict"
//========================== Функции в JAVASCRIPT =============================
// ----------------------- задача 4 ------------------------------
let showMessage;
if (2 > 1) {
    showMessage = function() {
        console.log('Message');
    }
}
showMessage();

// ====================== Массивы в JAVASCRIPT. ===========================

// ----------------------- задача 1 ------------------------------
let arr1 = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr1;
newArr.push('Петя');
console.log(arr1.length);

// ----------------------- задача 2 ------------------------------
let arrUsers = ['Ваня','Иштван'];
console.log(arrUsers);
arrUsers.push('Оля');
console.log(arrUsers);
arrUsers.splice(1, 1, 'Пэтя Порошенко');
console.log(arrUsers);
let removed = arrUsers.splice(0, 1);
console.log(removed);
arrUsers.unshift('Маша', 'Паша');
console.log(arrUsers);


// ----------------------- задача 3 ------------------------------
let arr2 = ['Ваня','Иштван','Оля',];
let removedarr2 = arr2.splice(1, 1);
console.log(arr2);
console.log(removedarr2);


// ----------------------- задача 4 ------------------------------
let str = 'Ваня, Иштван, Оля';
let arr = str.split(',');
console.log(arr);

// ====================== JavaScript Document object model (DOM) ===========================

// ----------------------- задача 1 ------------------------------
let elData = document.querySelectorAll('[data-say-hi="yes"]');
console.log(elData);
// ----------------------- задача 2 ------------------------------
let elem = document.querySelectorAll('.lesson-2-list > li');
console.log(elem[1]);
// ----------------------- задача 3 ------------------------------
let elemLike = document.querySelectorAll('.like');
console.log(elemLike);
// ----------------------- задача 4 ------------------------------
const list = document.querySelector('.lesson-2-list');
list.insertAdjacentHTML( 
    'beforeend',
    '<li>Text</li>'
);


// ====================== JavaScript размеры прокрутка и координаты элементов на странице и окна браузера. ===========================

// ----------------------- задача 1 ------------------------------
console.log(window.innerWidth - document.documentElement.clientWidth);

// ----------------------- задача 2 ------------------------------
function scroll() {
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: "smooth",
    })
}
setTimeout(scroll, 1000);

// ----------------------- задача 3 ------------------------------

const elemFirst = document.querySelector('.object-1');
const elemSecond = document.querySelector('.object-2');
const elemThird = document.querySelector('.object-3');

console.log(elemFirst);

const getelemFirst = elemFirst.getBoundingClientRect();
const getelemSecond = elemSecond.getBoundingClientRect();
const getelemThird = elemThird.getBoundingClientRect();

console.log(getelemFirst);
console.log(getelemSecond);
console.log(getelemThird);