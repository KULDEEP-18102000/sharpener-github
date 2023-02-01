const express=require('express');

const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    console.log("In next middleware");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Add Product</button></form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router