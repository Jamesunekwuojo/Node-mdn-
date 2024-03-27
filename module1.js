// Load http module
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

//Create Http server

const server = http.createServer(function (req, res){
    //set the response HTTp header with HTTP status and content type

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello World\n");
});

// Send the response body "Hello world"


server.listen(port, hostname, function (){
    console.log(`Server running at http://${hostname}:${port}/`);
});