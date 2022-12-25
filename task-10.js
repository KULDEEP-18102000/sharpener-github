// localStorage.setItem('name','Boby');
// console.log(localStorage.getItem('name'));

// sessionStorage.setItem('name','kuldeep');

// document.cookie='name=kyle; expires='+new Date(2023,4,5).toUTCString();

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
  }