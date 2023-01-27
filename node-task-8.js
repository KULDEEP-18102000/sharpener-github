const http=require('http');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    // const data=fs.readFileSync('message.txt');
    // console.log(data)
    fs.readFile('message.txt',(err,data)=>{
        if(url==='/'){
            res.write('<html>')
            res.write('<head><title>Enter message</title></head>')
            res.write(`<body><h1>${data}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>`)
            res.write('</html>')
            return res.end();
        }
    })
    
    if(url==="/message" && method==="POST"){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            // console.log(parsedBody)
            const message=parsedBody.split('=')[1]
            fs.writeFile('message.txt',message, err=>{
                // fs.readFile('message.txt',(err,data)=>{
                //     if(err){
                //         console.log(err)
                //     }else{
                //         console.log(data)
                //         const ul=document.getElementById('list')
                //         ul.textContent=data
                //     }
                // })
                res.statusCode=302;
                res.setHeader('Location','/')
                
                return res.end()
            });
            
        })
        // fs.writeFileSync('message.txt','DUMMY');
        
    }
})

server.listen(4000)