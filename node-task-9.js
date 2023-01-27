const fs=require('fs')

const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write(`<body><h1></h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>`)
        res.write('</html>')
        return res.end();
    }

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
            res.statusCode=302;
            res.setHeader('Location','/')
            
            return res.end()
        });
        
    })
}
}

//module.exports=requestHandler
// module.exports={
//     handler:requestHandler,
//     someText:'some hard coded text'
// };

// module.exports.handler=requestHandler;
// module.exports.someText="some hard coded text"

exports.handler=requestHandler;
exports.someText="some hard coded text"