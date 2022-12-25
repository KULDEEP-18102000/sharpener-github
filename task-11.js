const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

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
    // localStorage.setItem('name',nameInput.value);
    // localStorage.setItem('email',emailInput.value);
  }