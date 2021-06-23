// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
let pContent = document.getElementById('content');
console.log(pContent);
let t1 = pContent.textContent;
console.log(t1);
//     b) отримує текст з блоку з id "rules"
let prules = document.getElementById('rules');
console.log(prules);
//     c) замініть текст параграфа з id 'content' на будь-який інший
pContent.innerText='Hello worl !!!!!!Hello worl !!!!!!Hello worl !!!!!!Hello worl !!!!!!Hello worl !!!!!!Hello worl !!!!!!';
//     d) замініть текст параграфа з id 'rules' на будь-який інший
prules.innerHTML='<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi'
//     e) змініть кожному елементу колір фону на червоний
let allelement = document.body.querySelectorAll('*');
for (let bodyItems of allelement ){bodyItems.style.backgroundColor="red";}
//     f) змініть кожному елементу колір тексту на синій
for (let bodyItems of allelement ){bodyItems.style.color="blue";}
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let allClassIdRule = prules.classList;
console.log(allClassIdRule);
//     h) отримати всі елементи з класом fc_rules
let allElementClassRules = document.getElementsByClassName('fc_rules');
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for( fc_rulesitem of allElementClassRules){
    fc_rulesitem.style.color="rgb(139, 55, 55)"};
