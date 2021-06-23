// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
let users = [
  'ascccd',
  1212,
  ['xvvxcvc', 'xcvxvxvsdsdvsff', 56, [454545, 4448777, ]],
  {
    qqqqqqq: {
      qwqw: 'xcxcxcxcxccxcx',
      aaaaaaa: [{
        awawaa: '45454',
        tyt: {
          hnghn: 44554,
          ty: 'pphphphphp',
          sdsd: [1, {
            sda: 'spspsps'
          }, 3, 8, 5, 6]
        }
      }, {
        awawaww: 'dsdsddlllcl'
      }]
    },
  },
  {
    name: 'vasya',
    age: 31,
    status: false,
    address: {
      city: 'Lviv',
      country: 'Ukraine',
      street: 'Shevchenko',
      houseNumber: 1
    }
  }, {
    name: 'petya',
    age: 30,
    status: true,
    address: {
      city: 'New York',
      country: 'USA',
      street: 'East str',
      houseNumber: 21
    }
  }, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {
      city: 'Budapest',
      country: 'Hungary',
      street: 'Kuraku',
      houseNumber: 78
    }
  }, {
    name: 'olya',
    age: 28,
    status: false,
    address: {
      city: 'Prague',
      country: 'Czech',
      street: 'Paster',
      houseNumber: 56
    }
  }, {
    name: 'max',
    age: 30,
    status: true,
    address: {
      city: 'Istanbul',
      country: 'Turkey',
      street: 'Mikar',
      houseNumber: 39
    }
  }, {
    name: 'anya',
    age: 31,
    status: false,
    address: {
      city: 'Rio',
      country: 'Brasil',
      street: 'Ronaldi',
      houseNumber: 5
    }
  }, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {
      city: 'Montreal',
      country: 'Canada',
      street: 'Acusto',
      houseNumber: 90
    }
  }, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {
      city: 'Quebeck',
      country: 'Canada',
      street: 'Binaro',
      houseNumber: 33
    }
  }, {
    name: 'masha',
    age: 30,
    status: true,
    address: {
      city: 'Moscow',
      country: 'Russia',
      street: 'Gogolia',
      houseNumber: 1
    }
  }, {
    name: 'olya',
    age: 31,
    status: false,
    address: {
      city: 'Portland',
      country: 'USA',
      street: 'Forest str',
      houseNumber: 4
    }
  }, {
    name: 'max',
    age: 31,
    status: true,
    address: {
      city: 'Cairo',
      country: 'Egypt',
      street: 'Seashore',
      houseNumber: 45
    }
  }
];
// 
const wrapUser1 = document.createElement('div');
document.body.append(wrapUser1);
wrapUser1.style.backgroundColor = 'orange'

// for (let items of users) {
  let divUserWrap = document.createElement('div');
  wrapUser1.appendChild(divUserWrap);
  divUserWrap.style.backgroundColor = 'blue'
  divUserWrap.style.margin = '10px';
  divUserWrap.style.padding = '5px';
  let ppp = divUserWrap;
  keyGet(users, ppp)
  // keyGet(items, ppp)
// }

function keyGet(userObj, ppp) {
  let count = '';
  if (typeof userObj === 'object' && !Array.isArray(userObj)) {
    for (const key in userObj) {
      let divUserAttr = document.createElement('div');
      divUserAttr.style.padding = '3px 3px 3px 3px';
      divUserAttr.style.margin = '3px 3px 3px 3px';
      divUserAttr.style.backgroundColor = 'grey';
      divUserAttr.style.border = 'black 1px solid';
      ppp.appendChild(divUserAttr);
      count = `${key}:<br>`;
      divUserAttr.innerHTML = `${count}`;
      keyGet(userObj[key], divUserAttr);
    }
  } else if (Array.isArray(userObj)) {
    for (const keyArr of userObj) {
      let divUserAttr = document.createElement('div');
      divUserAttr.style.padding = '4px 4px 4px 4px';
      divUserAttr.style.backgroundColor = 'green';
      divUserAttr.style.borderBottom = 'brown 2px solid';
      ppp.appendChild(divUserAttr);
      keyGet(keyArr, divUserAttr);
    }
  } else {
    let divUserAttr = document.createElement('div');
    divUserAttr.style.padding = '2px 2px 2px 2px';
    divUserAttr.style.backgroundColor = 'silver';
    divUserAttr.style.borderBottom = 'indigo 2px solid';
    ppp.appendChild(divUserAttr);
    count = `${userObj} <br>`;
    divUserAttr.innerHTML = `${count}`;
  }
}