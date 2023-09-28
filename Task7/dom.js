var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newDescription =document.getElementById('description').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    
     li.appendChild(document.createTextNode(newItem));
     li.appendChild(document.createTextNode(newDescription));


    var curr = document.createElement('button');
    curr.className ='btn btn-danger btn-sm float-right delete';

    curr.appendChild(document.createTextNode('X'));

    var editButton = document.createElement('button');
    editButton.className ='btn btn-danger btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));

    li.appendChild(curr);
    li.appendChild(editButton);


    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li);

        }
    }

}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var desk = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || desk.toLowerCase().indexOf(text)!= -1){
        item.style.display ='block';
        }
        else{
            item.style.display = 'none';
        }

    });
}
