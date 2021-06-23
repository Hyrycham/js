// створити функцію яка обчислює та повертає площу прямокутника висотою
let q = '';

function sq(a = 0, b = 0) {
    return a * b;
}

q = sq(5, 60);
console.log(q);
console.log('_____________прямокутника_____________');
// - створити функцію яка обчислює та повертає площу кола
function sqCirle(r = 0) {
    return Math.PI * Math.pow(r, 2);
}
q = sqCirle(10);
console.log(q);
console.log('____________площу кола______________');
// створити функцію яка обчислює та повертає площу циліндру
// бічної поверхі циліндра
function sqCylinder(r = 0, h = 0) {
    return Math.PI * 2 * r * h;
}
q = sqCylinder(10, 2);
console.log(q);
console.log('_________бічної поверхі циліндра_________________');
// площа повної поверхні циліндра
function sqCylinderALL(r = 0, h = 0) {
    return sqCylinder(r, h) + 2 * sqCirle(r);
}
q = sqCylinderALL(10, 2);
console.log(q);
console.log('_________повної поверхні циліндра_________________');
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax() {
    let l = arguments.length;
    let i = 0;
    let maxVal = arguments[0];
    let minVal = arguments[0];
    for (i = 0; i < l; i++) {
        if (maxVal < arguments[i]) {
            maxVal = arguments[i]
        };
        if (minVal > arguments[i]) {
            minVal = arguments[i]
        }
    }
    console.log(`print max value :${maxVal}`)
    return minVal;
}
q = minMax(123, 200, 3, 4, 3335, 6, 7, 833, 3339, 10, 11333, 12333, 13, 14, 15);
console.log(` min value to calculate:${q}`);
console.log('__________________________');
// 
// /// створити функцію яка заповнює масив рандомними числами ////
let n = 0

function arrRandom(n = 1) {
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        arr2[i] = Math.round(Math.random() * 100);
    }
    return arr2;
}
//   console.log('============+============');
// //////////////////////////////////////
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


function change(arr = [], j = 0) {
    if ((j + 1) < arr.length) {
        let itemI = arr[j];
        let itemIplus = arr[j + 1];
        arr[j] = itemIplus;
        arr[j + 1] = itemI;
    } else {
        console.log('the value of the index exceeds the length of the array')
    }
    return arr;
}
let arrRand4 = arrRandom(4);
console.log(arrRand4);
q = change(arrRand4, 2);
console.log(q);
console.log('______change_____________');
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr5 = [];
arr5 = [0, 10, 20, 30, 0, 40, 50, 0, 70, 80, 90, 0];
// arr5 = arrRandom(1000);
console.log(arr5);

function zenoEnd(arr = []) {
    let l = arr.length - 1;
    let itemI = '';
    let itemIMinus = '';
    for (let j = 0; j < l; j = j + 1) {
        for (let i = l; i > 0; i = i - 1) {
            if ((arr[i - 1] === 0) && (arr[i] !== 0)) {
                itemI = arr[i];
                itemIMinus = arr[i - 1];
                arr[i] = itemIMinus;
                arr[i - 1] = itemI;
            }
        }
    }
    return arr;
}
q = zenoEnd(arr5);
console.log(q);
console.log('_______zero move________________');
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let str1 = '      Harry           Potter       ';
let str2 = '              Ron         Whisley     ';
let str3 = '   Hermione        Granger       ';
let arr6 = [str1, str2, str3];
console.log(arr6);

function normalName(arrx) {
    let names = '';
    for (i = 0; i < arrx.length; i++) {
        names = arrx[i].trim();
        while (names.includes('  ')) {
            names = names.replace('  ', ' ');
        }
        arrx[i] = names;
    }
    return arrx;
}
q = normalName(arr6);
console.log(q);
console.log('_______delete space________________');
//////////
// variant#2
function normalName2(text = '') {
    let names = text.trim();
    while (names.includes('  ')) {
        names = names.replace('  ', ' ');
    }
    text = names;
    return text;
}
let inputText = prompt(`введіть імя ':`);
console.log(inputText);
q = normalName2(inputText);
console.log(q);
console.log('_______delete space2________________');
//////////
// variant#3

function normalName3(text = '') {
    let normalN = '';
    text=text.trim();
    let zzz = text.split(' ');
    for (zzzItem of zzz) {
        if (!!zzzItem) {normalN = normalN + zzzItem + ' ';}
    }
    normalN=normalN.trim();
    return normalN;
}
q = normalName3(inputText);
console.log(q);
console.log('_______delete space3________________');

