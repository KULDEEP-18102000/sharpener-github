
// var second_item=document.querySelector('.list-group-item:nth-child(2)')
// second_item.style.background='green';

// var third_item=document.querySelector('.list-group-item:nth-child(3)')
// third_item.style.visibility='hidden';

// items=document.querySelectorAll('.list-group-item');
// items[1].style.color='green';

// odd_items=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i=0;i<odd_items.length;i++){
//     odd_items[i].style.background='green';
// }

var item_List=document.querySelector('#items');
// parentNode
// console.log(item_List.parentNode);
// item_List.parentNode.style.background='#f4f4f4';
// console.log(item_List.parentNode.parentNode);

// parentElement
// console.log(item_List.parentElement);
// item_List.parentElement.style.background='#f4f4f4';
// console.log(item_List.parentElement.parentElement);

// console.log(item_List.childNodes);
console.log(item_List.children);
// console.log(item_List.children[1]);
// item_List.children[1].style.backgroundColor='yellow';
// console.log(item_List.firstChild);
// console.log(item_List.firstElementChild);
// item_List.firstElementChild.textContent='hello';

// console.log(item_List.lastChild);
// console.log(item_List.lastElementChild);
// item_List.lastElementChild.textContent='hello'

// console.log(item_List.nextSibling);
// console.log(item_List.nextElementSibling);

// console.log(item_List.previousSibling);
// console.log(item_List.previousElementSibling);
// item_List.previousElementSibling.style.backgroundColor='green';

var new_div=document.createElement('div');
new_div.className='hello';
new_div.id='hello1';

new_div.setAttribute('title','Hello div');

var my_div_text=document.createTextNode('Hello world');
new_div.appendChild(my_div_text)

console.log(new_div);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
// var ul=document.querySelector('#items');
// console.log(ul);
// var li_item=document.querySelector('.list-group-item');
// console.log(li_item);
// ul.insertBefore(new_div,li_item);
container.insertBefore(new_div,h1);
new_div.style.fontSize='30px';

parent_node=document.getElementById('items');
// console.log(parent_node);
// console.log(parent_node.innerHTML);
// parent_node.innerHTML='<li>Hello world</li>'+parent_node.innerHTML;
// console.log(parent_node.innerHTML);

var new_li=document.createElement('li');
var new_li_text=document.createTextNode('Hello world');
new_li.appendChild(new_li_text);
parent_node.prepend(new_li);