const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url=='/home'){
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
    }
    if(req.url=='/about'){
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
    }
    if(req.url=='/node'){
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
        res.write('</html>')
    }
})

server.listen(4000)