
// var second_item=document.querySelector('.list-group-item:nth-child(2)')
// second_item.style.background='green';

// var third_item=document.querySelector('.list-group-item:nth-child(3)')
// third_item.style.visibility='hidden';

items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

odd_items=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd_items.length;i++){
    odd_items[i].style.background='green';
}