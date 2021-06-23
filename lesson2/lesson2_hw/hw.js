// --створити масив з:
// - з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(typeof arr1[0]);
console.log('----------------------');
// - з 5 стічкових значень
// та вивести його в консоль/
let arr2 = ['1', '2', '3', '4', '5'];
console.log(arr2);
console.log(typeof arr2[1]);
console.log('----------------------');
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr3 = [];
arr3[0] = 1;
arr3[1] = '01';
arr3[2] = 'dsvsv';
arr3[3] = true;
arr3[4] = false;
arr3[5] = [1, 2, 'vssdvsv', true];
arr3[6] = 10;
arr3[7] = '05651';
arr3[8] = 'dsvsdfvdvrwv022v';
arr3[9] = true;

console.log(arr3);
console.log('----------------------');
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i = i + 1) {
    document.write(`<div style="background-color: cornflowerblue;"><h4>${arr3[i]}</h4></div> `)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i = i + 1) {
    document.write(`<div style="background-color: cornflowerblue; display: flex; width: 300px; height:40px; border-bottom: crimson 1px solid; justify-content: space-between;"><h4>text:${arr3[i]}</h4><h3>index=${i}<h3></div>`)
};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let k = 0
while (k < 20) {
    document.write(`<div style="background-color: blue; display: flex; width: 300px; height:40px; border-bottom: crimson 1px solid;"><h4>text:${Math.random()}</h4></div>`)
    k = k + 1
};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

k = 0;
while (k < 20) {
    document.write(`<div style="background-color: cornflowerblue; display: flex; width: 300px; height:40px; border-bottom: black 1px solid; justify-content: space-between;"><h4>text:${Math.random()}</h4><h3>index=${k}<h3></div>`)
    k = k + 1
};
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for ( let item of arr4) {
    console.log(item);
}
console.log('----------------------');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr5 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (item of arr5) {
    console.log(item);
}

console.log('----------------------');
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr6 = ['1', 2, [1, 2, 3, '6', 3], '4rdddg', '5dfgd', true, '7', false, 'sfseqwe2wdcew9'];
for (item of arr6) {
    console.log(item);
}

console.log('-----======++++++-------');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr7 = ['1', 2, 45, '4rdddg', true, 9634, 2 > 3, false, 'sfseqwe2wdcew9'];
for (item of arr7) {
    if (typeof (item) === 'boolean') {
        console.log(item);
        console.log('__________________');
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (item of arr7) {
    // console.log (typeof(item));
    // console.log('-----======++++++-------');
    if (typeof (item) === 'number') {
        console.log(item);
        console.log('+++++++++++++');
    }
}

console.log('----------------------');
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (item of arr7) {
    // console.log (typeof(item));
    // console.log('-----======++++++-------');
    if (typeof (item) === 'string') {
        console.log(item);
    }
}

console.log('----------------------');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr8 = [];
for (let i = 0; i < 10; i++) {
    arr8[i] = prompt(`введіть значення елемeнту arr[${i}]`);
    console.log(arr8[i])
}

console.log(arr8)
console.log('===----------------------');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div style="background-color: cornflowerblue; display: flex; width: 300px; height:40px; border-bottom: red 1px solid; justify-content: space-between;"><h3>index=${i}<h3></div>`)
}
console.log('===----------------------');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div style="background-color: cornflowerblue; display: flex; width: 300px; height:40px; border-bottom: cyan 1px solid; justify-content: space-between;"><h3>index=${i}<h3></div>`)
}
console.log('===----------------------');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 2; i < 202; i = i + 2) {
    console.log(i / 2);
    document.write(`<div style="background-color: cornflowerblue; display: flex; width: 300px; height:40px; border-bottom: red 1px solid; justify-content: space-between;"><h3>index=${i/2}<h3></div>`)
}
console.log('===----------------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i = i + 1) {
    if (!(i % 2)) {
        console.log(i);
        document.write(`<div style="background-color: #${(Math.round((i+5)/10)-1)}8d${(Math.round((i+5)/10)-1)}46; display: flex; width: 300px; height:40px; border-bottom: cyan 1px solid; justify-content: space-between;"><h3>index=${i}<h3></div>`)
    }
}
console.log('===----------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i = i + 1) {
    if ((i % 2)) {
        console.log(i);
        document.write(`<div style="background-color: #${(Math.round((i+5)/10)-1)}2d${(Math.round((i+5)/10)-1)}46; display: flex; width: 300px; height:40px; border-bottom: cyan 1px solid; justify-content: space-between;"><h3>index=${i}<h3></div>`)
    }
}
console.log('===-------++++++++++++++++++---------');
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// // // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// // Записати цей об'єкт в новий масив

let usersWithId = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    }
];

let citiesWithId = [{
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    }
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (const city_ of citiesWithId) {
        if (usersWithId[i].id === city_.user_id) {
            usersWithCities[i] = usersWithId[i];
            usersWithCities[i].address = city_;
        }
    }
};

console.log(usersWithCities)
console.log('===-------++++++++++++++++++---------');