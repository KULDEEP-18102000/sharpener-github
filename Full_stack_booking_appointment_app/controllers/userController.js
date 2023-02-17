const User=require('../models/user')

exports.getUsers=(req,res,next)=>{
    User.findAll()
    .then((users)=>{
        res.json(users);
    })
    .catch((error)=>{res.send(error)})
}

exports.insertUser=(req,res,next)=>{
    const UserName=req.body.UserName;
    const phoneNumber=req.body.phoneNumber;
    const Email=req.body.Email;
    User.create({
        UserName:UserName,
        phoneNumber:phoneNumber,
        Email:Email
    }).then((result)=>{
        res.json(result)
        console.log(result)
    })
    .catch((error)=>{
        res.send(error)
        console.log(error);})
}

exports.deleteUser=(req,res,next)=>{
const prodId = req.params.id;
 console.log(prodId);
  User.findByPk(prodId)
    .then(user => {
      return user.destroy();
    })
    .then(result => {
      console.log('DESTROYED user');
    })
    .catch(err => console.log(err));
}