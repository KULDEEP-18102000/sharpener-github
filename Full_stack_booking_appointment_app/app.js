// const username=document.getElementById('exampleInputName');
// console.log(username);
// const phone=document.getElementById('exampleInputphone');
// console.log(phone);
// const email=document.getElementById('exampleInputemail');
// console.log(email);
// const my_form=document.getElementById('my-form');
// console.log(my_form);
// const list_items=document.getElementById('list-items');
// console.log(list_items);

const path = require('path');
// import path from 'path';
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const userRoutes=require('./routes/userRoutes')

const app = express();

let cors = require("cors");
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
