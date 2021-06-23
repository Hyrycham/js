// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				}
			];

const header = document.createElement('h1');
header.innerText='Правила бойцовского клуба';
header.style.color='red';
document.body.append(header);

let  wrap1= document.createElement('div');
wrap1.setAttribute('id','wrap');
document.body.append(wrap1);
let i=1;
for( const rulesItem of rules ){
const divRules =document.createElement('div');
divRules.setAttribute('class',`rules rule${i}`);
divRules.style.borderBottom='solid black 1px'
const h2Rules=document.createElement('h2');
h2Rules.innerText=`${rulesItem.title}`
const pRules=document.createElement('p');
pRules.innerText=`${rulesItem.body}`
divRules.append(h2Rules);
divRules.append(pRules);
wrap1.append(divRules);
i=i+1;
}














