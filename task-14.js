const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ul=document.getElementById('users');

window.addEventListener("DOMContentLoaded",()=>{axios.get('https://crudcrud.com/api/f2505dcdaf754ff7a410254892919f5d/AppointmentData')
.then((response)=>{
    // console.log(response.data[0].userEmail)
    for(let i=0;i<response.data.length;i++){
        var name=response.data[i].username;
        console.log(response.data[i]._id);
        var email=response.data[i].userEmail;
        console.log(email);
        const li=document.createElement('li');
        const s=`${name} ${email}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data[i]._id);
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        const edit_btn='<button onclick="editFunction(event)">edit</button>';
        li.innerHTML=li.innerHTML+edit_btn;
        ul.appendChild(li);
    }
})
.catch((err)=>{
    console.log(err)
})})


myForm.addEventListener('submit', onSubmit);




function onSubmit(e) {
    e.preventDefault();
    myObj={
        username:nameInput.value,
        userEmail:emailInput.value
    };

    axios.post('https://crudcrud.com/api/f2505dcdaf754ff7a410254892919f5d/AppointmentData',myObj)
    .then((response)=>{
        var name=response.data.username;
        console.log(name);
        var email=response.data.userEmail;
        console.log(email);
        const li=document.createElement('li');
        const s=`${name} ${email}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data._id);
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        const edit_btn='<button onclick="editFunction(event)">edit</button>';
        li.innerHTML=li.innerHTML+edit_btn;
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
    axios.delete(`https://crudcrud.com/api/f2505dcdaf754ff7a410254892919f5d/AppointmentData/${event.target.parentNode.id}`)
    .then((res)=>{console.log(res)})
    .catch((err)=>{
        console.log(err)
    })
    // localStorage.removeItem(event.target.parentNode.id);
    // const list_item=document.getElementById(email);
    // console.log(list_item);
}  

function editFunction(event){
    // console.log("edit")
    var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    axios.get(`https://crudcrud.com/api/f2505dcdaf754ff7a410254892919f5d/AppointmentData/${event.target.parentNode.id}`)
    .then((response)=>{
        let currName=response.data.username;
        nameInput.value=currName
        let currEmail=response.data.userEmail;
        emailInput.value=currEmail;
        ulItems.removeChild(li_item);
        axios.delete(`https://crudcrud.com/api/f2505dcdaf754ff7a410254892919f5d/AppointmentData/${event.target.parentNode.id}`)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    })
    // currObj=JSON.parse(localStorage.getItem(event.target.parentNode.id)) 
    // console.log(currObj.username);
    // let currName=currObj.username;
    // nameInput.value=currName
    // // console.log(currName)
    // let currEmail=currObj.userEmail;
    // emailInput.value=currEmail;
    // ulItems.removeChild(li_item);
    // localStorage.removeItem(event.target.parentNode.id);
}