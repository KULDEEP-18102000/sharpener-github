const username=document.getElementById('exampleInputName');
console.log(username);
const phoneNumber=document.getElementById('exampleInputphone');
console.log(phoneNumber);
const email=document.getElementById('exampleInputemail');
console.log(email);
const my_form=document.getElementById('my-form');
console.log(my_form);
const list_items=document.getElementById('list-items');
console.log(list_items);

async function getInformation(){
    try {
        let response= await(axios.get('http://localhost:3000/user/getUser'))
    console.log(response)
    for(let i=0;i<response.data.length;i++){
                var username=response.data[i].UserName;
                // console.log(response.data[i]._id);
                var phoneNumber=response.data[i].phoneNumber;
                // console.log(u_dish);
                var email=response.data[i].Email;
                // console.log(u_table);
                let ul=document.getElementById(`list-items`)
                const li=document.createElement('li');
                const s=`${username} ${phoneNumber} ${email}`;
                li.appendChild(document.createTextNode(s))
                li.setAttribute('id',response.data[i].id);
                // li.setAttribute('class',inline)
                console.log(li);
                const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
                li.innerHTML=li.innerHTML+delete_btn
                // const edit_btn=`<button onclick="editFunction(event)">edit</button>`;
                // li.innerHTML=li.innerHTML+edit_btn
                
                ul.appendChild(li);
}
    } catch (error) {
        console.log(error)
    }
    
}

window.addEventListener("DOMContentLoaded",getInformation)

my_form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    myObj={
        UserName:username.value,
        phoneNumber:phoneNumber.value,
        Email:email.value
    };
    
    async function postFunction(){
        try {
            const response=await axios.post('http://localhost:3000/user/insertUser',myObj)
            console.log(response)
        let username=response.data.UserName;
        // console.log(username);
        var phoneNumber=response.data.phoneNumber;
        // console.log(phoneNumber);
        var email=response.data.Email
        let ul=document.getElementById(`list-items`)
        const li=document.createElement('li');
        const s=`${username} ${phoneNumber} ${email}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data.id);
                // li.setAttribute('class',inline)
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        // const edit_btn=`<button onclick="editFunction(event)">edit</button>`;
        // li.innerHTML=li.innerHTML+edit_btn     
        ul.appendChild(li);
        } catch (error) {
            console.log(error)
        }

        
    }
    postFunction();
    username.value="";
    phoneNumber.value="";
    email.value=""
}

async function deleteFunction(event){
    // console.log(event.target.parentNode.id);
    try {
        var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    ulItems.removeChild(li_item);
    const response=await axios.delete(`http://localhost:3000/user/deleteuser/${event.target.parentNode.id}`)
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}  
