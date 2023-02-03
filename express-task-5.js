const http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs')
const data=[]

app.use(bodyParser.urlencoded({extended:false}))

app.use('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/message" method="POST"><input type="text" id="username" name="username"></input><button type="submit">Login</button></form>')
})

app.get('/message',(req,res,next)=>{
    res.send(`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username');" action="/message" method="POST"><h4>${data}</h4><input type="text" name="message" id="message"></input><input type="hidden" name="username" id="username"></input><button type="submit">send</button></form>`)
})

app.post('/message',(req,res,next)=>{
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data)
    for(let i=0;i<data.length;i++){
        fs.appendFileSync('message.txt',data[i]);
    }
    console.log(`${req.body.username}:${req.body.message}`)
    res.redirect('/message')
})

const server=http.createServer(app);
server.listen(3000)