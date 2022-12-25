const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ul=document.getElementById('users');
// console.log(ul);

let myObj_arr=[];
let myObj_serialized=JSON.stringify(myObj_arr);
localStorage.setItem('myObj',myObj_serialized);
myForm.addEventListener('submit', onSubmit);




function onSubmit(e) {
    e.preventDefault();
    myObj={
        username:nameInput.value,
        userEmail:emailInput.value
    };
    myObj_arr_serialized=localStorage.getItem('myObj');
    myObj_arr=JSON.parse(myObj_arr_serialized);
    myObj_arr.push(myObj);
    let myObj_serialized=JSON.stringify(myObj_arr);
    localStorage.setItem('myObj',myObj_serialized);
    let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
    console.log(myObj_deserialized);
    const n=myObj_deserialized.length;
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    for(let i=0;i<n;i++){
        let username=myObj_deserialized[i].username;
        // console.log(username);
        let userEmail=myObj_deserialized[i].userEmail;
        // console.log(userEmail);
        let s=`username->${username} and useremail->${userEmail}`
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(s));
        ul.appendChild(li);
    }
    console.log(n);
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
  }

// let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
// console.log(myObj_deserialized);
// const n=myObj_deserialized.length;
// for(let i=0;i<n;i++){
//     let username=myObj_deserialized[i].username;
//     // console.log(username);
//     let userEmail=myObj_deserialized[i].userEmail;
//     // console.log(userEmail);
//     let s=`username->${username} and useremail->${userEmail}`
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(s));
//     ul.appendChild(li);
//     }