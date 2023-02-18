const amount = document.getElementById('exampleInputAmount');
console.log(amount);
const description = document.getElementById('exampleInputdescription');
console.log(description);
const category = document.getElementById('exampleInputcategory');
console.log(category);
const my_form = document.getElementById('my-form');
console.log(my_form);
const list_items = document.getElementById('list-items');
console.log(list_items);

let editUserId = null;

async function getInformation() {
    try {
        let response = await (axios.get('http://localhost:3000/expense/getexpense'))
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
            var amount = response.data[i].amount;
            // console.log(response.data[i]._id);
            var description = response.data[i].description;
            // console.log(u_dish);
            var category = response.data[i].category;
            // console.log(u_table);
            let ul = document.getElementById(`list-items`)
            const li = document.createElement('li');
            const s = `${amount} ${description} ${category}`;
            li.appendChild(document.createTextNode(s))
            li.setAttribute('id', response.data[i].id);
            // li.setAttribute('class',inline)
            console.log(li);
            const delete_btn = `<button onclick="deleteFunction(event)">delete</button>`;
            li.innerHTML = li.innerHTML + delete_btn
            const edit_btn = `<button onclick="editFunction(event)">edit</button>`;
            li.innerHTML = li.innerHTML + edit_btn

            ul.appendChild(li);
        }
    } catch (error) {
        console.log(error)
    }

}

window.addEventListener("DOMContentLoaded", getInformation)

my_form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    myObj = {
        amount: amount.value,
        description: description.value,
        category: category.value
    };

    async function postFunction() {
        try {
            if (editUserId != null) {
                const res = await axios.put(`http://localhost:3000/expense/editExpense/${editUserId}`, myObj)
                console.log(res)
                const response =await axios.get(`http://localhost:3000/expense/getexpensebyid/${editUserId}`)
                console.log(response)
                let amount = response.data.amount;
                // console.log(username);
                var description = response.data.description;
                // console.log(phoneNumber);
                var category = response.data.category
                let ul = document.getElementById(`list-items`)
                const li = document.createElement('li');
                const s = `${amount} ${description} ${category}`;
                li.appendChild(document.createTextNode(s))
                li.setAttribute('id', response.data.id);
                // li.setAttribute('class',inline)
                console.log(li);
                const delete_btn = `<button onclick="deleteFunction(event)">delete</button>`;
                li.innerHTML = li.innerHTML + delete_btn
                const edit_btn = `<button onclick="editFunction(event)">edit</button>`;
                li.innerHTML = li.innerHTML + edit_btn
                ul.appendChild(li);
                editUserId = null
            } else {
                const response = await axios.post('http://localhost:3000/expense/postexpense', myObj)
                console.log(response)
                let amount = response.data.amount;
                // console.log(username);
                var description = response.data.description;
                // console.log(phoneNumber);
                var category = response.data.category
                let ul = document.getElementById(`list-items`)
                const li = document.createElement('li');
                const s = `${amount} ${description} ${category}`;
                li.appendChild(document.createTextNode(s))
                li.setAttribute('id', response.data.id);
                // li.setAttribute('class',inline)
                console.log(li);
                const delete_btn = `<button onclick="deleteFunction(event)">delete</button>`;
                li.innerHTML = li.innerHTML + delete_btn
                const edit_btn = `<button onclick="editFunction(event)">edit</button>`;
                li.innerHTML = li.innerHTML + edit_btn
                ul.appendChild(li);
            }

        } catch (error) {
            console.log(error)
        }


    }
    postFunction();
    amount.value = "";
    description.value = "";
    category.value = ""
}

async function deleteFunction(event) {
    // console.log(event.target.parentNode.id);
    try {
        var ulItems = event.target.parentNode.parentNode;
        var li_item = event.target.parentNode;
        ulItems.removeChild(li_item);
        const response = await axios.delete(`http://localhost:3000/expense/deleteExpense/${event.target.parentNode.id}`)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

async function editFunction(event) {
    // console.log(event.target.parentNode.id);
    try {
        var ulItems = event.target.parentNode.parentNode;
        var li_item = event.target.parentNode;
        const response = await axios.get(`http://localhost:3000/expense/getexpensebyid/${event.target.parentNode.id}`)
        // ulItems.removeChild(li_item);
        // const response = await axios.put(`http://localhost:3000/expense/editExpense/${event.target.parentNode.id}`)
        console.log(response)
        let currAmount = response.data.amount;
        amount.value = currAmount
        let currDescription = response.data.description
        description.value = currDescription
        let currCategory = response.data.category;
        category.value = currCategory
        ulItems.removeChild(li_item);
        editUserId = event.target.parentNode.id;
    } catch (error) {
        console.log(error)
    }
}  