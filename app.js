const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// const mongoConnect=require('./util/database').mongoConnect
const mongoose=require('mongoose')
// const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('63f7b6e16e30b21bda9c4ec1')
//     .then(user => {
//       req.user = new User(user.name,user.email,{items:[]},user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(()=>{
  // console.log(client)
  // app.listen(3000)
// })

mongoose.connect('mongodb+srv://Boby:RmL7Bs5Od0JGlSEP@cluster0.scdgo.mongodb.net/shop?retryWrites=true&w=majority')
.then(result=>{
  console.log("connected")
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})