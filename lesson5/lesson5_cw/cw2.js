let divName = document.createElement('div');
divName.style.width='200px';
divName.style.height='50px';
divName.style.backgroundColor='orange';
document.body.appendChild(divName);
let userN=localStorage.getItem('userName');
divName.innerHTML=`<p>${userN}</p>`;