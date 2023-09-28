var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));

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


