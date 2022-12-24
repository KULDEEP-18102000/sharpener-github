var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    var del_btn=document.createElement('button');
    del_btn.className='btn btn-danger btn-sm float-right delete';
    del_btn.appendChild(document.createTextNode('X'));
    li.appendChild(del_btn);

    var edit_btn=document.createElement('button');
    edit_btn.className='btn btn-danger btn-sm float-right mx-2 delete';
    edit_btn.appendChild(document.createTextNode('edit'));
    li.appendChild(edit_btn);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure to delete")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}