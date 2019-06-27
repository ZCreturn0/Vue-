const http = require('http');
const server = http.createServer();

server.on('request', function(req, res){
    const url = req.url;
    if(url == '/getResult'){
        res.end('callback("aaaaa")');
    }
    else{
        res.end('404');
    }
});

server.listen('8888', function(){
    console.log('server running in 127.0.0.1:8888');
})