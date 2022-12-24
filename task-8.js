var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
// var newItem_2=document.getElementById('item-2');
// console.log(newItem_2);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newItem_2=document.getElementById('item-2').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newItem_2));
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

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    // console.log(items);
    Array.from(items).forEach(function(item){
        var all_item=item.childNodes;
        // console.log(all_item);
        var itemName=all_item[0].textContent;
        var new_item_name=all_item[1].textContent;
        // console.log(new_item_name);
        if(itemName.toLowerCase().indexOf(text)!=-1 || new_item_name.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}