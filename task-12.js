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
        ul.appendChild(li);
    }
  }
