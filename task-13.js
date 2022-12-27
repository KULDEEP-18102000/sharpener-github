const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ul=document.getElementById('users');
// console.log(ul);

// let myObj_arr=[];
// let myObj_serialized=JSON.stringify(myObj_arr);
// localStorage.setItem('myObj',myObj_serialized);
while(ul.hasChildNodes()){
    ul.removeChild(ul.firstChild);
}
for(var i=0;i<localStorage.length;i++){
    var name=JSON.parse(localStorage.getItem(localStorage.key(i))).username;
    // console.log(name);
    var email=JSON.parse(localStorage.getItem(localStorage.key(i))).userEmail;
    // console.log(email);
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
}
myForm.addEventListener('submit', onSubmit);




function onSubmit(e) {
    e.preventDefault();
    myObj={
        username:nameInput.value,
        userEmail:emailInput.value
    };
    myObj_serialized=JSON.stringify(myObj);
    localStorage.setItem(myObj.userEmail,myObj_serialized);
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    for(var i=0;i<localStorage.length;i++){
        var name=JSON.parse(localStorage.getItem(localStorage.key(i))).username;
        // console.log(name);
        var email=JSON.parse(localStorage.getItem(localStorage.key(i))).userEmail;
        // console.log(email);
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
    }
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