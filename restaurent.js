const price=document.getElementById('examplePriceAmount');
console.log(price);
const dish=document.getElementById('exampledishdescription');
console.log(dish);
const table=document.getElementById('table');
console.log(table);
const my_form=document.getElementById('my-form');
console.log(my_form);
const list_items=document.getElementById('table1');
console.log(list_items);
// const ul=document.getElementById('table1')

window.addEventListener("DOMContentLoaded",()=>{axios.get('https://crudcrud.com/api/9219c962235e484a8579886fcf7e9147/Orders')
.then((response)=>{
    // console.log(response.data[0].userEmail)
    for(let i=0;i<response.data.length;i++){
        var u_price=response.data[i].userPrice;
        console.log(response.data[i]._id);
        var u_dish=response.data[i].userDish;
        console.log(u_dish);
        var u_table=response.data[i].userTable;
        console.log(u_table);
        let ul=document.getElementById(`${u_table}`)
        const li=document.createElement('li');
        const s=`${u_price} ${u_dish} ${u_table}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data[i]._id);
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        
        ul.appendChild(li);
    }
})
.catch((err)=>{
    console.log(err)
})})

my_form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    myObj={
        userPrice:price.value,
        userDish:dish.value,
        userTable:table.value
    };

    axios.post('https://crudcrud.com/api/9219c962235e484a8579886fcf7e9147/Orders',myObj)
    .then((response)=>{
        var u_price=response.data.userPrice;
        console.log(u_price);
        var u_dish=response.data.userDish;
        console.log(u_dish);
        var u_table=response.data.userTable
        let ul=document.getElementById(`${u_table}`)
        const li=document.createElement('li');
        const s=`${u_price} ${u_dish} ${u_table}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data._id);
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        ul.appendChild(li);
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+`<h1>something went wrong</h1>`
        console.log(err)})

    
  }

//delete request  
function deleteFunction(event){
    // console.log(event.target.parentNode.id);
    var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    ulItems.removeChild(li_item);
    axios.delete(`https://crudcrud.com/api/9219c962235e484a8579886fcf7e9147/Orders/${event.target.parentNode.id}`)
    .then((res)=>{console.log(res)})
    .catch((err)=>{
        console.log(err)
    })
    // localStorage.removeItem(event.target.parentNode.id);
    // const list_item=document.getElementById(email);
    // console.log(list_item);
}  

