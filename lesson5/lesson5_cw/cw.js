// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainheder = document.getElementById('main_header');
mainheder.style.backgroundColor = "red";
mainheder.innerText = '2021_april';
// b) робить шириниу елементу ul 400px
document.getElementsByTagName('ul')[0].style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements = document.getElementsByClassName('linkList');
for (let itemlinkList of linkListElements) {
    itemlinkList.style.width = "50%"
};
// d) отримує текст який зберігається в елементі з класом listElement2
let text1 = document.getElementsByClassName('listElement2');
text1 = text1[0].textContent;
// console.log(text1)
// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (let itemliElements of liElements) {
    itemliElements.style.backgroundColor = "grey"
};
// f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (let itemaElements of aElements) {
    itemaElements.className = 'anchor'
};
// / g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let itemaElements of aElements) {
    if (itemaElements.textContent === 'link3'){itemaElements.style.fontSize='40px'}
};
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let itemaElements of aElements) {
    itemaElements.classList.add (`element_${itemaElements.textContent}`) 
};
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderElements = document.getElementsByClassName('sub-header');
let subHeaderElementsColor =  prompt(' введіть колір ');
for (subHeaderItems of subHeaderElements){subHeaderItems.style.backgroundColor=subHeaderElementsColor};
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderElementsColor2 =  prompt(' введіть колір content 2 segment');
for (subHeaderItems of subHeaderElements){
    if (subHeaderItems.textContent==='content 2 segment'){
    subHeaderItems.style.backgroundColor=subHeaderElementsColor2}};
    // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1Elements= document.getElementsByClassName('content_1');
let anyText= prompt('введіть будь-який текст:');
for (content_1ElItems of content_1Elements) {content_1ElItems. innerHTML=`<p>${anyText}</p>`};
// l) отримати елементи p та змінити їм padding на 20px
let pElements=document.getElementsByTagName('p');
for (pItems of pElements){pItems.style.padding='20px'};
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2Elements = document.getElementsByClassName('text2');
for (text2Item of text2Elements) {text2Item.innerText=`april2021`};
// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

let inputName = document.forms.myform;
inputName.okbtn.onclick = () => {
// ev.preventDefault();
localStorage.setItem('userName',inputName.input1.value);
};













;