//1.parentElement
var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello';

//lastChild
//console.log(itemList.lastChild);

//createChild

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello';

//firstChild
//console.log(itemList.firstChild);

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ='green';

//createElement
var newDev = document.createElement('div');
console.log(newDev);
newDev.className='hello';
newDev.id='hello1';

//setAttribute
newDev.setAttribute('title','hello Dev');

//createtesxtnode
var newDivText = document.createTextNode('Hello World');

//appendchild
newDev.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDev.style.fontSize = '30px';
container.insertBefore(newDev, h1);

var ch=document.getElementById('items');
console.log(ch.innerHTML);
ch.innerHTML ='Hello world'+ch.innerHTML;
