// 1) створити функцію яка приймає масив та виводить його
let arr1 = [1, 2, 3, 'jfjfjfj', 'gjgjgjg'];
let rezult1 = null;

function funcArr(arr) {
    rezult1 = arr;
    return rezult1;
}
funcArr(arr1);
console.log(rezult1);
console.log('========================');
// 2) створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попередню функцію.
let n=0
 function arrRandom (n=1){
        let arr2=[];
        for (let i= 0; i<n; i++){
        arr2[i]=Math.round( Math.random()*100);
     }
    return arr2;
 }
 let qq=arrRandom(10)
  console.log(qq);
 console.log('============+============');
//  3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNuber3 (a=0,b=0,c=0)
{ 
    a=+a;
    b=+b;
    c=+c;
    let minRez=a;
    if ((a<b)&&(a<c)){minRez=a}
    else if (b<c) {minRez=b}
    else {minRez=c}
    return minRez;
}
let q = minNuber3(9,17,3);
console.log(q);
console.log('================--========');
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNuber3 (a=0,b=0,c=0)
{ 
    a=+a;
    b=+b;
    c=+c;
    let maxRez=a;
    if ((a>b)&&(a>c)){maxRez=a}
    else if (b>c) {maxRez=b}
    else {maxRez=c}
    return maxRez;
}
q = maxNuber3(9,17,3);
console.log(q);
console.log('================--========');
// 5) створити функцію яка повертає найбільше число з масиву
let arr3= arrRandom(11);
console.log(arr3);
function maxItemOfArr(arrx){
    let maxItem=arrx[0];
for (itemsofarr of arrx){
if (itemsofarr>maxItem) { maxItem=itemsofarr}
}
return maxItem;
}
q= maxItemOfArr(arr3);
console.log(q);
console.log('=======^Max=====--========');
// 6) створити функцію яка повертає найменьше число з масиву
let arr4=arrRandom(9);
console.log(arr4);
function minItemOfArr(arrx){
    let minItem=arrx[0];
for (itemsofarr of arrx){
if (itemsofarr<minItem) {minItem=itemsofarr}
}
return minItem;
}
q=minItemOfArr(arr4);
console.log(q);
console.log('=======^^^min=======--========');
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
let arr5= arrRandom(3);
console.log(arr5);
function summItemOfArr(arrx){
    let summItem=0;
for (itemsofarr of arrx){
summItem=summItem+itemsofarr
}
return summItem;
}
q=summItemOfArr(arr5);
console.log(q);
console.log('=======^^^summa=======--========');
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr6= arrRandom(4);
console.log(arr6);
function middlarItemOfArr(arrx){
    let summItem=0;
    let lenghtArr=arrx.length;
  for (itemsofarr of arrx){
summItem=summItem+itemsofarr
}
let middlar=summItem/lenghtArr;
return middlar;
}
q=middlarItemOfArr(arr6);
console.log(q);
console.log('=======^^^serednyearyfm=======--========');
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arr7=[
    {name: 'Dima', age: 13},
     {model: 'Camry'},
     {girl:true, children: false, Mam: 'Olga', Dad: ' Homer Simpson'}
    ];
function myKey (arrx){
let i=0;
let arrKeys=[];
for( arrItems of arrx){
   arrKeys[i]=Object.keys(arrItems);
   i=i+1;
}
return arrKeys;
}
q=myKey(arr7);
console.log(q);
console.log('=======keys=======--========');
//ваіант №2
function myKey1 (arrx){
let i=0;
let a=[];
let arrKeys1=[];
for( arrItems of arrx){
   a=Object.keys(arrItems);
for ( aItem of a){
    arrKeys1[i]=aItem;
    i=i+1;
}
   
}
return arrKeys1;
}
q=myKey1(arr7);
console.log(q);
console.log('=======keys=======--========');
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function myvalue (arrx){
    let i=0;
    let arrvalue=[];
      for( arrItems of arrx){
       arrvalue[i]=Object.values(arrItems);
       i=i+1;
    }
    return arrvalue;
    }
    q=myvalue(arr7);
    console.log(q);
    console.log('=======values=======--========');
    // 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    // EXAMPLE:
    // [1,2,3,4]
    // [2,3,4,5]
    // результат
    // [3,5,7,9]
let arr8= arrRandom(4);
let arr9= arrRandom(4);
console.log(arr8);
console.log(arr9);
function summForIndex (arrx,arry){
let l=arrx.length;
let arr10=[];
if (l>arry.length){ l=arry.length};  /// якщо довжина масивів різна, то
 for (let i=0;i<l;i++){   // сумуємо елементи  по меншому масиву
    arr10[i]=arrx[i] + arry[i];
}
return arr10;
}
    q=summForIndex(arr8, arr9);
    console.log(q);
    console.log('=======summindex=======--========');
