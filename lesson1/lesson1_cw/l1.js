// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
let a1 = 34 + 190 - 90 - 100 //    34
let a2 = 48 / 2 - 12 //    12
let a3 = 3 * 22 //    66
let a4 = 100 - (5 * 2) //    90
let a5 = 2 * (5 - 99 / 99) //    8

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
// Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
let heightC = 10;
let dC = 4;
const pi = Math.PI;
let v = pi * heightC * (dC / 2) * (dC / 2);
console.log(v);
let v1 = pi * heightC * Math.pow(dC / 2, 2)
console.log(v1);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
console.log(k);

let k1 = Math.hypot(3, 4);
console.log(k1);

let k2 = Math.pow((Math.pow(3, 2) + Math.pow(4, 2)), 0.5);
console.log(k2);
// Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, 
// возраст, хобби (каждой на новой строки спомощью \n).

let fio = 'Hyrych Andrii Mykhajlovych';
let age = 38;
let hobbi = ' read the books';
alert(fio + '\n' + age + '\n' + hobbi);
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 + str3;
document.write(concatenation);

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str4 = "20";
let a = 5;
document.write(str4 + a + "<br/>"); //205
document.write(str4 - a + "<br/>"); //15
document.write(str4 * "2" + "<br/>"); //40
document.write(str4 / 2 + "<br/>"); //10

//  13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let num1 = prompt('перше число');
let num2 = prompt('друге число');
alert(+num1 + +num2);
console.log(Number(num1) + Number(num2));

// ====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let number1 = prompt('number1?');
let number2 = prompt('number2?');
let number3 = prompt('number3?');
let rezult = null;

if ((Number(number1) < Number(number2)) && (Number(number1) < Number(number3))) {
    rezult = number1;
    if (+number2 < +number3) {
        rezult = rezult + ',' + number2 + ',' + number3;
    } else {
        rezult = rezult + ',' + number3 + ',' + number2
    }

} else if (+number2 < +number3) {
    rezult = number2;
    if (+number1 < +number3) {
        rezult = rezult + ',' + number1 + ',' + number3;
    } else {
        rezult = rezult + ',' + number3 + ',' + number1
    }
} else if (+number1 < +number2) {
    rezult = number3 + ',' + number1 + ',' + number2;
} else {
    rezult = number3 + ',' + number2 + ',' + number1;
}

console.log(rezult)

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt(' какой цвет на светофоре: \n зеленый \n желтый \n красный?');
if (color == 'зеленый') {
    alert('иди');
} else if (color == 'желтый') {
    alert('подожди');
} else if (color == 'красный') {
    alert('стой');
} else {
    alert('делай что хочешь!')
}

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


let color2 = prompt(' какой цвет на светофоре: \n зеленый \n желтый \n красный?');
let cars = prompt(' наличие на дороге машин: да / нет?');
if ( (color2 == 'зеленый') && (cars=='нет') ) {
    alert('иди');
} 
else if ( (color2 == 'зеленый') && (cars=='да') ) {
    alert('подожди пока нарушители проедут');
}
 else if ( (color2 == 'желтый') && (cars=='нет') ) {
    alert('жди');
}
 else if ( (color2 == 'желтый') && (cars=='да') ) {
    alert('все рано жди');
}
else if ( (color2 == 'красный') && (cars=='нет') ) {
    alert('стой все рано');
}
else if ( (color2 == 'желтый') && (cars=='да') ) {
    alert('стой и жди');
}

else {
    alert('делай что хочешь!')
}



let a = +prompt('a');

let b = +prompt('b');

let c = +prompt('c');


if (a>b && a>c) {

        if (b > c) {
            console.log(c, b, a);
        } else {
            console.log(b, c, a);
        }
    }

else if (b > a && b > c) {
        if (a > c) {
            console.log(c, a, b);
        } else {
            console.log(a, c, b);
        }
    }

     else if (c > b && c > a) {
        if (a > b) {
            console.log(b, a, c);
        }
        else {
            console.log(a, b, c);
        }
    }
     else if (a > b && a > c) {
        if (c > b) {
            console.log(b, c, a);
        } else {
            console.log(c, b, a);
        }
    }
     else if (b > a && b > c) {
        if (c > a) {
            console.log(a, c, b);
        } else {
            console.log(c, a, b);
        }
    }
else if (c > a && c > b) {
    if (b > a) {
        console.log(a, b, c);
    } else {
        console.log(b, a, c);
    }
}







