
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let q='';
let arr7=[
    {name: 'Dima', age: 13},
     {model: 'Camry'},
     {girl:true, children: false, Mam: 'Olga', Dad: ' Homer Simpson'} ];

function myKey (arrx){
let i=0;
let arrKeys=[];
for( arrItems of arrx){
    for (arrItemsIn in arrItems ){
       arrKeys[i]=arrItemsIn;
          i=i+1; 
    }
   
}
return arrKeys;
}
q=myKey(arr7);
console.log(q);
console.log('=======keys=======--========');
// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // // EXAMPLE:
// // // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// // //ваіант №1
// function myvalue (arrx){
//     let i=0;
//     let arrvalue=[];
//       for( arrItems of arrx){
//         for (arrItemsin in arrItems )  {
//                arrvalue[i]=arrx[0].arrItemsin;
//        i=i+1;
//         }
//     }
//     return arrvalue;
//     }
//     q=myvalue(arr7);
//     console.log(q);
//     console.log('=======values=======--========');
