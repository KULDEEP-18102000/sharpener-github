const express = require('express');

const router = express.Router();

const User=require('../models/user')

const userController=require('../controllers/userController')


router.get('/getUser',userController.getUsers)

router.post('/insertUser',userController.insertUser)

router.delete('/deleteuser/:id',userController.deleteUser)

// router.put('/:id',(req, res, next) => {
//     const prodId = req.body.id;
//     const updatedUsername = req.body.username;
//     const updatedPhoneNumber = req.body.phoneNumber;
//     const updatedEmail = req.body.email;
//     Booking.findByPk(prodId)
//       .then(user => {
//         user.username = updatedUsername;
//         product.phoneNumber = updatedPhoneNumber;
//         product.email = updatedEmail;
//         return product.save();
//       })
//       .then(result => {
//         console.log('UPDATED USER!');
//         res.redirect('/');
//       })
//       .catch(err => console.log(err));
//     })

module.exports=router;