//герератор випадкових імен
function randomName() {
    let n = Math.round(Math.random() * 7 + 3);
    let randName = '';
    for (let i = 0; i < n; i++) {
        randName = randName + String.fromCharCode(Math.round(Math.random() * 25 + 65))
    };
    return randName;
};
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
};
let arrCinderella = [];
for (let i = 0; i < 10; i++) {
    arrCinderella.push(new Cinderella(randomName(), Math.round(Math.random() * 64 + 16), Math.round(Math.random() * 10 + 28)))
}
console.log(arrCinderella);
class Prince {
    constructor(name, age, bootsize) {
        this.name = name;
        this.age = age;
        this.bootsize = bootsize;
    }
};
prince = new Prince('Vasya', 25, 29);
console.log(prince);

let winner = null;
for (const applicant of arrCinderella) {
    if (applicant.footsize === prince.bootsize) {
        winner = applicant;
        break
    };
};
console.log(winner);

console.log('________________________');
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella2(name, age, footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize
};
let arrCinderella2 = [];
for (let i = 0; i < 10; i++) {
    arrCinderella2.push(new Cinderella2(randomName(), Math.round(Math.random() * 64 + 16), Math.round(Math.random() * 10 + 28)))
}
console.log(arrCinderella2);

function Prince2(name, age, bootsize) {
    this.name = name;
    this.age = age;
    this.bootsize = bootsize
    this.findCinderella = function (arrC) {
        for (const applicant of arrC) {
            if (applicant.footsize === this.bootsize) {
                return applicant
            }
        };
    }
};
prince2 = new Prince2('Petya', 35, 30);
console.log(prince2);
console.log(prince2.findCinderella(arrCinderella2));
console.log('________________________');
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

function TagDescription(titleOfTag, action, attrs = [], ) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs
};
// ---------
function AtrDescription(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr
};
// '''''''''''-----------------------
let tagA = new TagDescription('a', 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь', [new AtrDescription('name', 'Устанавливает имя якоря внутри документа'), new AtrDescription('href', 'Задает адрес документа, на который следует перейт')]);

let tagDiv=new TagDescription( 'Div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[new AtrDescription('align','Задает выравнивание содержимого тега <div>.'),
new AtrDescription('title', 'Добавляет всплывающую подсказку к содержимому.')]);

let tagH1=new TagDescription('h1','представляет собой наиболее важный заголовок первого уровня,',
 [new AtrDescription('align','Определяет выравнивание заголовка.')]);

let tagspan=new TagDescription('span','предназначен для определения строчных элементов документа. ',
    [new AtrDescription('none','Для этого тега доступны универсальные атрибуты')]);

let tagInput=new TagDescription('Input','является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [new AtrDescription('form','Связывает поле с формой по её идентификатору'),
     new AtrDescription('autocomplete','Включает или отключает автозаполнение.')]);

let tagForm=new TagDescription('Form',' устанавливает форму на веб-странице',[new AtrDescription('action','Адрес программы или документа, который обрабатывает данные формы.'),
new AtrDescription('name','Имя формы.')]);

let tagOption=new TagDescription('Option','определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [new AtrDescription('disabled','Заблокировать для доступа элемент списка.'),
    new AtrDescription('label','Указание метки пункта списка.')]);

let tagSelect=new TagDescription('Select','позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
[new AtrDescription('accesskey','Позволяет перейти к списку с помощью некоторого сочетания клавиш.'),
new AtrDescription('autofocus','Устанавливает, что список получает фокус после загрузки страницы.')]);

console.log(tagA);
console.log(tagDiv);
console.log(tagH1);
console.log(tagspan);
console.log(tagInput);
console.log(tagForm);
console.log(tagOption);
console.log(tagSelect);

