const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ul=document.getElementById('users');


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
        li.setAttribute('id',email);
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

function deleteFunction(event){
    // console.log(event.target.parentNode.id);
    var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    ulItems.removeChild(li_item);
    localStorage.removeItem(event.target.parentNode.id);
    // const list_item=document.getElementById(email);
    // console.log(list_item);
}  

function editFunction(event){
    // console.log("edit")
    var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    currObj=JSON.parse(localStorage.getItem(event.target.parentNode.id)) 
    // console.log(currObj.username);
    let currName=currObj.username;
    nameInput.value=currName
    // console.log(currName)
    let currEmail=currObj.userEmail;
    emailInput.value=currEmail;
    ulItems.removeChild(li_item);
    localStorage.removeItem(event.target.parentNode.id);
}