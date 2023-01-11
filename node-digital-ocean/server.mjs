import http from "node:http";

http.createServer((req, res)=>{
    if(req.method === "GET"){
       const userIp =  req.socket.remoteAddress;
       res.writeHead(200, {
        "Content-Type": "text/html"
       })
       const substring  = userIp.substring(7)
       res.write(`your ip address: ${substring}`);
       res.end();
    }
}).listen(80, ()=>{
    console.log(80)
})