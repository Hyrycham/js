// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr3 = ['a', 'b', 'c'];
let arr4 = [1, 2, 3];
let lenghtTwoArr = arr3.length + arr4.length; // довжина двох масивів
let lengthArr3 = arr3.length // фіксуємо довжину масиву arr3
for (let i = lengthArr3; i < lenghtTwoArr; i++) {
    arr3[i] = arr4[(i - lengthArr3)];
};
console.log(arr3);
console.log('---------------------')
// працює для масивів довільної довжини
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arr5 = [1, 2, 3];
let arr6 = [];
let length_a5 = arr5.length;
for (let i = 0; i < arr5.length; i++) {
    arr6[length_a5 - i - 1] = arr5[i];
};
console.log(arr5);
console.log(arr6);
console.log('^^^^^^^ працює для масивів довільної довжини^^^^^^^')

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr7 = [1, 2, 3];
arr7.push(4);
arr7.push(5);
arr7.push(6);
console.log(arr7);
console.log('---------------------');
///OR///
arr7 = [1, 2, 3];
for (let i = 0; i < 3; i++) {
    arr7[arr7.length] = i + 4;
};
console.log(arr7);
console.log('---------------------');
// or/////////
arr7 = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arr7.push(i);
};
console.log(arr7);
console.log('---------------------');
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr8 = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arr8.unshift(i);
};
console.log(arr8);
console.log('---------------------');
//////or ///////////
arr8 = [1, 2, 3];
for (let i = 6; i > 3; i = i - 1) {
    arr8.unshift(i);
};
console.log(arr8);
console.log('---------------------');
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let arr9 = [1, 2, 3, 4, 5];
let arr10 = arr9.slice(arr9.length - 2); // вирізаєм два останніх
console.log(arr10);
// АБО//////////////

let n = 2 //кількість елементів які необхідно відокремити
let lengthArr9 = arr9.length - n;
for (let i = 0; i < lengthArr9; i = i + 1) {
    arr9.shift();
};
console.log(arr9);
console.log('------dsfdfsf------------');
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let arr11 = [1, 2, 3, 4, 5];
let lengthArr11 = arr11.length - 2;
for (let i = 0; i < lengthArr11; i = i + 1) {
    arr11.pop();
};
console.log(arr11);
console.log('--======================----------');
// Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let arr12 = [1, 2, 3, 4, 5];
let arr13 = ['a', 'b', 'c'];
let lengthArr12 = arr12.length - 3; // 3 - кількість елементів які потрібно залишити
for (let i = 0; i < lengthArr12; i = i + 1) {
    arr12.pop();
};
let lenght2Arr = arr12.length + arr13.length;
let lengthArr12new = arr12.length
for (let i = lengthArr12new; i < lenght2Arr; i++) {
    arr12[i] = arr13[(i - lengthArr12new)];
};
console.log(arr12);
console.log('--232-------ewwef-----------');
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr14 = [];
for (let i = 0; i < 10; i = i + 1) {
    arr14[i] = Math.round(Math.random() * 100);
};
console.log(arr14);
for (let prrr of arr14) {
    if (!(prrr % 2)) console.log(prrr);
};

console.log('-1111111111111-----------');
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr15 = [];
for (let i = 0; i < 10; i = i + 1) {
    arr15[i] = Math.round(Math.random() * 1000);
};
console.log(arr15);
let arr16 = [];
let k = 0;
for (const item15 of arr15) {
    arr16[k] = item15;
    k = ++k;
}
console.log(arr16);
console.log('-===========================--------');
//  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// ЯКЕ СЛОВО?????????????????????????????????
// abc,acb,bac,bca,cab,cba???????????
/// Чи можуть букви повторюватися???????
let arr17 = ['a', 'b', 'c'];
let str17 = '';
for (let i = 2; i > -1; i = i - 1) {
    str17 = str17 + arr17[i];
};
console.log(str17);
////////////////////
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
str17 = '';
for (const letter of arr17) {
    str17 = str17 + letter;
};
console.log(str17);
////////////////////////
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
str17 = '';
let maxLenghtStr = Math.round(Math.random() * 100) + 3;
let m = 0;
while (m < maxLenghtStr) {
    str17 = str17 + arr17[(Math.round(Math.random() * 10)) % 3];
    m = m + 1;
}
console.log(str17);
////////////////////////
console.log('-===========================--------');
// =====ДОДАТКОВО 1=======

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr18 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// . перебрати його циклом while
let i18 = 0;
while (i18 < arr18.length) {
    console.log(arr18[i18]);
    i18 = i18 + 1;
};
console.log('-===--------');
// 2. перебрати його циклом for
for (const itemarr18 of arr18) {
    console.log(itemarr18);
};
console.log('-===--------');
// . перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < arr18.length) {
    if (j % 2) {
        console.log(arr18[j]);
    }
    j = j + 1;
};
console.log('-===-++++++------');
// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr18.length; j = j + 1) {
    if (j % 2) {
        console.log(arr18[j]);
    };
};
console.log('-===--------');
// перебрати циклом while та вивести  числа тільки парні  значення
j = 0;
while (j < arr18.length) {
    if (!(arr18[j] % 2)) {
        console.log(arr18[j]);
    }
    j = j + 1;
};
console.log('-===-++++++-parni zna4ennya-----')
// перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr18.length; j = j + 1) {
    if (!(arr18[j] % 2)) {
        console.log(arr18[j]);
    };
};
console.log('-===--------');
// замінити кожне число кратне 3 на слово "okten"
j = 0;
while (j < arr18.length) {
    if (!(arr18[j] % 3)) {
        arr18[j] = 'okten';
    }
    j = j + 1;
};
console.log(arr18);
console.log('-===-++++++------');

// вивести масив в зворотньому порядку.
arr18 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arr18revers = [];
let length_a18 = arr18.length;
for (let i = 0; i < arr18.length; i++) {
    arr18revers[length_a18 - i - 1] = arr18[i];
};
console.log(arr18);
console.log(arr18revers);
console.log('-===-++++++------');
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// . перебрати його циклом while(с заду на перед)
i18 = arr18.length;
while (i18 > 0) {
    console.log(arr18[i18 - 1]);
    i18 = i18 - 1;
};
console.log('-===--------');
// перебрати його циклом for (с заду на перед)
i18 = arr18.length;
for (let j = i18; j > 0; j = j - 1) {
    {
        console.log(arr18[j - 1]);
    };
};
console.log('-===--------');

// . перебрати циклом while та вивести  числа тільки з непарним індексомс заду на перед)
j = arr18.length;
while (j > 0) {
    if ((j - 1) % 2) {
        console.log(arr18[j - 1]);
    }
    j = j - 1;
};
console.log('-===-++++++------');
// перебрати циклом for та вивести  числа тільки з непарним індексом (с заду на перед)

i18 = arr18.length;
for (let j = i18; j > 0; j = j - 1) {
    if ((j - 1) % 2) {
        console.log(arr18[j - 1]);
    };
};
console.log('-===--------');
// перебрати циклом while та вивести  числа тільки парні  значення(с заду на перед)
j = arr18.length;
while (j > 0) {
    if (!((arr18[j - 1]) % 2)) {
        console.log(arr18[j - 1]);
    }
    j = j - 1;
};
console.log('-===-++++++------');
// перебрати циклом for та вивести  числа тільки парні  значення (с заду на перед)
i18 = arr18.length;
for (let j = i18; j > 0; j = j - 1) {
    if (!((arr18[j - 1]) % 2)) {
        console.log(arr18[j - 1]);
    };
};
console.log('-===--------');
// замінити кожне число кратне 3 на слово "okten"(с заду на перед)
j = arr18.length;
while (j > 0) {
    if (!(arr18[j - 1] % 3)) {
        arr18[j - 1] = 'okten';
    }
    j = j - 1;
};
console.log(arr18);
console.log('-===-++++++------');
// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let arr19 = [];
for (let i = 1; i < 51; i = i + 1) {
    arr19[i - 1] = i * 2;
};

console.log(arr19);
console.log('-=--------------------');
// - заповнити його 50 непарними числами за допомоги циклу.
let arr20 = [];
for (let i = 0; i < 50; i = i + 1) {
    arr20[i] = i * 2 + 1;
};

console.log(arr20);
console.log('-=--------------------');
// / створити пустий масив та :
// - заповнити його 50  ВИПАДКОВИМИ парними числами за допомоги циклу.
let arr21 = [];
let i = 0;
while (i < 50) {
    randNumber = Math.round(Math.random() * 100);
    if (!(randNumber % 2)) {
        arr21[i] = randNumber;
        i = i + 1;
    }
};
console.log(arr21);
console.log('-=--------------------');
// 1. Створити пустий масив та :c. Заповнити масив 20ма рандомними числами.

let arr22 = [];
i = 0;
while (i < 20) {
      arr22[i] = Math.round(Math.random() * 100);
        i = i + 1;
    };
console.log(arr22);
console.log('-=--------------------');
// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 
let arr23 = [];
i = 0;
while (i < 20) {
      arr23[i] = Math.round(Math.random() * (732-8)+8);
        i = i + 1;
    };
console.log(arr23)
console.log('-=--------------------');
// 2. Вивести за допомогою console.log кожен третій елемен 
//  елемент з індексом кратним 3?
//  чи третій елемент по порядку ?
// третій по порядку має індекс 2
// 
///
for ( let i=1; i<20;i++){
    if (!((i+1)% 3)) {//перевіряємо номер по порядку на кратність 3
        console.log(arr23[i]);
    }
};
console.log('-=--++------------------');

for ( let i=0; i<20;i++){
    if (!(i%3)) {//перевіряємо індекс на кратність 3
        console.log(arr23[i]);
    }
};
console.log('-=--------------------');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i=0; i<20;i++){
    if ( (!(i%3))&&(!(arr23[i]%2)) ) {
        console.log(arr23[i]);
    }
};
console.log('-=--------------------');
// 4. Вивести за допомогою console.log кожен третій елемен тільки
//  якщо цей елемент є парним та записати їх в новий масив
let arr24=[];
j=0
for (let i=0; i<20;i++){
    if ( (!(i%3))&&(!(arr23[i]%2)) ) {
    arr24[j]=arr23[i];
    j=j+1;}     
};console.log(arr24);
console.log('-=--------------------');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr25=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i=0; i<(9-1);i++){
    if ( !(arr25[i+1]%2) ) {
    console.log(arr25[i]);
    }     
};
console.log('-=--------------------');
// 6. Є масив з числами [100,250,50,168,120,345,188], 
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr26=[100,250,50,168,120,345,188];
let rezult=0;
for (const price of arr26){
    rezult=rezult + +price;
  };
  console.log(rezult);
console.log(rezult/arr26.length);
console.log('-=--------------------');
// 7. Створити масив з рандомними значеннями, 
// помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr27 = [];
let arr28 = [];
i = 0;
while (i < 20) {
      arr27[i] = Math.round(Math.random() * 100);
        i = i + 1;
    };
console.log(arr27);
i = 0;
while (i < 20) {
    arr28[i] = arr27[i]*5;
      i = i + 1;
  };

  console.log(arr28);
console.log('-=--------------------');
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і 
// якщо елемент є числом - додати його в інший масив.
let arr29=[12,5,6,9,4,65,6,3,'fgjf','fthtseffe',true,2112,'fsdfsf',false,2<3,45454,'sdvsv'];
console.log(arr29);
let arr30=[];
j=0;
for (const itemarr29 of arr29){
    if (typeof(itemarr29)==='number'){
arr30[j]=itemarr29;
j=j+1;
    }
};
console.log(arr30);
console.log('-=--------------------');
















