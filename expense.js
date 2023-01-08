const amount=document.getElementById('exampleInputAmount');
console.log(amount);
const description=document.getElementById('exampleInputdescription');
console.log(description);
const category=document.getElementById('exampleInputcategory');
console.log(category);
const my_form=document.getElementById('my-form');
console.log(my_form);
const list_items=document.getElementById('list-items');
console.log(list_items);

while(list_items.hasChildNodes()){
    list_items.removeChild(list_items.firstChild)
}
for(let i=0;i<localStorage.length;i++){
    let my_obj=JSON.parse(localStorage.getItem(localStorage.key(i)));
    const list_item=document.createElement('li');
    const content=`${my_obj.amount}-${my_obj.description}-${my_obj.category}`;
    list_item.appendChild(document.createTextNode(content));
    list_item.setAttribute('id',my_obj.description);
    const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
    list_item.innerHTML=list_item.innerHTML+delete_btn
    const edit_btn='<button onclick="editFunction(event)">edit</button>';
    list_item.innerHTML=list_item.innerHTML+edit_btn;
    list_items.appendChild(list_item);
}

my_form.addEventListener('submit',add_expense);

function add_expense(e){
    e.preventDefault();
    let my_obj={
        amount:amount.value,
        description:description.value,
        category:category.value
    }
    let my_obj_serialized=JSON.stringify(my_obj);
    localStorage.setItem(description.value,my_obj_serialized);

    while(list_items.hasChildNodes()){
        list_items.removeChild(list_items.firstChild)
    }
    for(let i=0;i<localStorage.length;i++){
        let my_obj=JSON.parse(localStorage.getItem(localStorage.key(i)));
        const list_item=document.createElement('li');
        const content=`${my_obj.amount} - ${my_obj.description} - ${my_obj.category}`;
        list_item.appendChild(document.createTextNode(content));
        list_item.setAttribute('id',my_obj.description);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        list_item.innerHTML=list_item.innerHTML+delete_btn
        const edit_btn='<button onclick="editFunction(event)">edit</button>';
        list_item.innerHTML=list_item.innerHTML+edit_btn;
        list_items.appendChild(list_item);
    }

    // while(list_items.hasChildNodes()){
    //     list_items.firstChild
    // }
    // console.log("clicked")
    // e.preventDefault();
    // console.log(amount.value);
    // const list_item=document.createElement('li');
    // const content=`${amount.value}-${description.value}-${category.value}`;
    // list_item.appendChild(document.createTextNode(content));
    // const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
    // list_item.innerHTML=list_item.innerHTML+delete_btn
    // const edit_btn='<button onclick="editFunction(event)">edit</button>';
    // list_item.innerHTML=list_item.innerHTML+edit_btn;
    // list_items.appendChild(list_item);
    
}

function deleteFunction(e){
    e.preventDefault();
    const ul=e.target.parentNode.parentNode;
    const li=e.target.parentNode;
    ul.removeChild(li);
    localStorage.removeItem(e.target.parentNode.id);
}

function editFunction(e){
    e.preventDefault();
    var ulItems=e.target.parentNode.parentNode;
    var li_item=e.target.parentNode;
    my_obj=JSON.parse(localStorage.getItem(e.target.parentNode.id)) 
    let obj_amount=my_obj.amount;
    let obj_description= my_obj.description;
    let obj_category= my_obj.category
    amount.value=obj_amount
    description.value=obj_description
    category.value=obj_category
    ulItems.removeChild(li_item);
    localStorage.removeItem(e.target.parentNode.id);
}