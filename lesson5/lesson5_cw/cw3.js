// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const {name_,price,img}=document.forms.enterItems;
console.log(name_,price,img);
const buttonSave = document.getElementById('btn');
const key='key';
let i=0;
buttonSave.onclick = () => {
    save(name_.value,price.value,img.value)
};

const save =(name_,price,img) =>{
    const store = JSON.parse(localStorage.getItem(key))||[];
    for(itemst of store) {if (itemst.id>i) {i=itemst.id} };
store.push({id: i+1,name_,price,img });
localStorage.setItem(key,JSON.stringify(store));

}















