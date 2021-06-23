// //  Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //  Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello ='hello';
// let owu   = 'owu';
// let com   = 'com';
// let ua    = 'ua';
// let one   = 1;
// let ten   = 10;
// let m     = -999;
// let n     = 123;
// let pi    = 3.14;
// let e     = 2.7;
// let age0   = 16;
// let tr    = true;
// let fl    = false;

// alert( hello);
// alert( owu  );
// alert( com  );
// alert( ua   );
// alert( one  );
// alert( ten  );
// alert( m    );
// alert( n    );
// alert( pi   );
// alert( e    );
// alert( age0  );
// alert( tr   );
// alert( fl   );

// console.log(hello );
// console.log(owu   );
// console.log(com   );
// console.log(ua    );
// console.log(one   );
// console.log(ten   );
// console.log(m     );
// console.log(n     );
// console.log(pi    );
// console.log(e     );
// console.log(age0   );
// console.log(tr    );
// console.log(fl    );

// document.write(hello );
// document.write(owu   );
// document.write(com   );
// document.write(ua    );
// document.write(one   );
// document.write(ten   );
// document.write(m     );
// document.write(n     );
// document.write(pi    );
// document.write(e     );
// document.write(age0   );
// document.write(tr    );
// document.write(fl    );


// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// //   Вивести кожну змінну за допомогою: console.log , alert, document.write


// hello ='hello world';
// owu   = 'owu_school';
// com   = '.com';
// ua    = '.ua';
// one   = 2;
// ten   = 20;
// m     = -8888;
// n     = 12345;
// pi    = 3.1415;
// e     = 2.718;
// age0   = 18;
// tr    = true;
// fl    = false;

// alert( hello);
// alert( owu  );
// alert( com  );
// alert( ua   );
// alert( one  );
// alert( ten  );
// alert( m    );
// alert( n    );
// alert( pi   );
// alert( e    );
// alert( age0  );
// alert( tr   );
// alert( fl   );

// console.log(hello );
// console.log(owu   );
// console.log(com   );
// console.log(ua    );
// console.log(one   );
// console.log(ten   );
// console.log(m     );
// console.log(n     );
// console.log(pi    );
// console.log(e     );
// console.log(age0   );
// console.log(tr    );
// console.log(fl    );

// document.write(hello );
// document.write(owu   );
// document.write(com   );
// document.write(ua    );
// document.write(one   );
// document.write(ten   );
// document.write(m     );
// document.write(n     );
// document.write(pi    );
// document.write(e     );
// document.write(age0   );
// document.write(tr    );
// document.write(fl    );
// // ==========================



// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// let firstName = 'Andrii';
// let middleName = 'Mykhajlovych';
// let lastName = 'Hyrych';
// let person = (`${firstName} ${middleName} ${lastName}`);
// console.log(person);


// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name1 = prompt('Ім"я?');
// let name2 = prompt('По-Батькові?');
// let age1 = prompt('років?');

// console.log(`Вітаю ${name1} ${name2}. Тобі ${age1} років.`)



// // =======================
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// // =============

// // - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// // В однакових виразаї не використовувати однакові оператори!!!


// console.log(5 < 6) //-> true;
// console.log(5 > 6) //-> false;
// console.log(5 >= 6) //-> false;
// console.log(5 == 6) //-> false;
// console.log(10 >= 10) //-> true;
//  console.log(10 == 10) //-> true;
//  console.log(10 >10) //-> false;
//  console.log(10 < 10) //-> false;
//  console.log(10 != 10) //-> false;
//  console.log(123 < '123') //-> false;
//  console.log(123 == '123') //-> true;

// //  =============
// // Додатково:
// // - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12); //false
// console.log(34 > 33 && 23 < 90); //true
// console.log(99 > 100 && 45 > 12); //false
// console.log(132 > 100 || 45 < 12); //true
// console.log(111 > 11 || 45 < 111); //true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12)); //true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12)); //true
// console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12)); //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12)); //true
// console.log('------------------======================');
// console.log(!!'-1'); //
// console.log(!!-1); //
// console.log(!!'0'); //
// console.log(!!'null'); //
// console.log(!!'undefined'); //
// console.log(!!(3 / 'owu')); //f
// console.log((111 > 11 || 45 < 111) || !!'0'); //
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12)); //f

let a = prompt('a');

let b = prompt('b');

let c = prompt('c');


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