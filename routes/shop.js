const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    // console.log("In next middleware");
    res.send('<h1>Hello kuldeep</h1>')
})

module.exports=router;