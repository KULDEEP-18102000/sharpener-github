
var list=document.getElementById('items');
// var list=document.getElementsByClassName('list-group')[0];
// var list=document.getElementsByTagName('ul')[0];
var list_item=document.createElement('li');
list_item.appendChild(document.createTextNode("hello"));
list_item.className='list-group-item';
list.appendChild(list_item);
console.log(list);