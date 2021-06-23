let divlist= document.getElementById('list');
const key='key';
let store = JSON.parse(localStorage.getItem(key))||[];
const showlist=  () =>{
    if (!store.length){
        const empty=document.createElement('h3');
        empty.innerText='sorry, list is empty';
        divlist.appendChild(empty)
    };
let delleteAllButton =document.createElement('button');
for (let item of store){
   
    const iDiv=document.createElement('div');
    const name_E=document.createElement('div');
    const priceE=document.createElement('div');
    const imgE=document.createElement('img');
    const butttonDeleteE=document.createElement('button');
    imgE.src=item.img;
    name_E.innerText=`name${item.name_}`;
    priceE.innerText=`price:${item.price}`;
    butttonDeleteE.innerText=`delete${item.id}`;
    butttonDeleteE.onclick=()=>deleteitem(item.id) ;
    iDiv.append(name_E,priceE,imgE,butttonDeleteE);
    divlist.appendChild(iDiv);


}
delleteAllButton.innerText='Delete ALL';
delleteAllButton.onclick =()=>{deleteAll()}
divlist.appendChild(delleteAllButton)};


const deleteitem =(id_)=>{

    store=store.filter(value=>value.id!==id_)
    localStorage.setItem(key,JSON.stringify(store));
divlist.innerText='';
showlist()
};
const deleteAll =()=>{
    localStorage.clear();
    showlist();
    divlist.innerText='sorry, list is empty';
}
showlist();