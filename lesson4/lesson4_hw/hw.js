//герератор випадкових імен
function randomName(){
let n= Math.round( Math.random()*7+3);
let randName='';
    for (let i=0;i<n;i++){
        randName =randName+ String.fromCharCode(Math.round( Math.random()*25+65))};
    return randName;
    };
//герератор випадкових списків товарів
function randomOrder(){
    let t= Math.round( Math.random()*5+1);
    let randOrder=[];
    for (let i=0;i<t;i++){randOrder.push(randomName().toLowerCase())};
    return randOrder;
    };

// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
function user (id, name, surname, email, phone) {
this.id=id;    
this.name=name;
this.surname=surname;
this.email=email;
this.phone=phone;
};

let users=[];
for (let i=0; i<10; i++) {
    users.push(new user(i,randomName(),randomName(), randomName() +'@'+randomName()+'.com' ,'+380(066)'+Math.round( Math.random()*8999998+1000000)));
};
console.log(users);
console.log('____________________');
// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client { constructor(id, name, surname, email, phone, order) {
this.id=id;
this.name=name;
this.surname=surname;
this.email=email;
this.phone=phone;
this.order=order;
 }}
 let clients=[];
for(let i=0;i<10;i++){clients.push(new Client(i,randomName(),randomName(), randomName() +'@'+randomName()+'.com' ,'+380(066)'+Math.round( Math.random()*8999998+1000000), randomOrder()))};
console.log(clients);
console.log('____________________');
// 3 Створити функцію конструктор яка дозволяє створювати
//  об'єкти  car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} кмна годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car ( model, producer,yearOfManufacture,maxSpeed,volume){
this.model=model;
this.producer=producer;
this.yearOfManufacture=yearOfManufacture;
this.maxSpeed=maxSpeed;
this.volume=volume;
this.drive = function(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
this.info = function(){
    console.log(
`модель: ${this.model},
виробник: ${this.producer},
рік випуску ${this.yearOfManufacture},
максимальна швидкість: ${this.maxSpeed}км.на годину,
об'єм двигуна: ${this.volume} `)
};
this.increaseMaxSpeed = function(newSpeed) {this.maxSpeed += newSpeed};
this.changeYear = function (newValue){this.yearOfManufacture = newValue};
this.addDriver  = function (driver={}){this.driver = driver};
};

let mycar = new Car('x7','bmw',2010,250,3.2);
console.log(mycar);
console.log('_____--------_______________');
mycar.drive();
mycar.info();
mycar.increaseMaxSpeed(50);
mycar.changeYear(2017);
mycar.addDriver({name_:'Vasya', age:25, status:true});
console.log(mycar);
console.log('_____--------_______________');
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car2 { constructor( model, producer,yearOfManufacture,maxSpeed,volume){
    this.model=model;
    this.producer=producer;
    this.yearOfManufacture=yearOfManufacture;
    this.maxSpeed=maxSpeed;
    this.volume=volume;
    this.drive = function(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    this.info = function(){
        console.log(
    `модель: ${this.model},
    виробник: ${this.producer},
    рік випуску ${this.yearOfManufacture},
    максимальна швидкість: ${this.maxSpeed}км.на годину,
    об'єм двигуна: ${this.volume} `)
    };
    this.increaseMaxSpeed = function(newSpeed) {this.maxSpeed += newSpeed};
    this.changeYear = function (newValue){this.yearOfManufacture = newValue};
    this.addDriver  = function (driver={}){this.driver = driver};
}}
let mycarclass = new Car2('astra','opel',208,200,1.9);
console.log(mycarclass);
console.log('_____--------_______________');
mycarclass.drive();
mycarclass.info();
mycarclass.increaseMaxSpeed(70);
mycarclass.changeYear(2015);
mycarclass.addDriver({name_:'Petya', age:45, status:false});
console.log(mycarclass);
console.log('_____--------_______________');
// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню
let usersp2n = users.filter(function (filtredOfUser) {
    return !(filtredOfUser.id%2)
});
console.log(usersp2n);
console.log('________filter___________');
let usersSortIdup= users.sort (function (user1,user2){
    return user1.id-user2.id
});
console.log(usersSortIdup);
console.log('________sort___________');
let usersSortId= users.sort (function (user1,user2){
    return user2.id-user1.id// звоpотній порядок
});
console.log(usersSortId);
console.log('________sort2___________');
// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
// clients
let clietsSort= clients.sort(function(value1, value2){
  return value2.order.length-value1.order.length
});
console.log(clietsSort);
console.log('________+++++++++___________');

















































