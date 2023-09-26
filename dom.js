//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);

//document.title =123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent ='Hello';
//headerTitle.innerText = 'Goodbye';
//headerTitle.innerHTML ='<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
var subhead = document.getElementsByClassName('title');
subhead[0].style.fontWeight = 'bold';
subhead[0].style.color = 'green';




