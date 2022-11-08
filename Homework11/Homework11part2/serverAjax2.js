const http = require("http");
const url = require("url");
const querystring = require("querystring");
const static = require("node-static");
const file = new static.Server(".", {
    cache: 0
});

function accept(req, res) {
    if (req.url == "/booos.json") {
        // delay
        setTimeout(()=>{
            file.serve(req, res);
        }, 2000);
    } else {
        file.serve(req, res);      
    }
  }
  http.createServer(accept).listen(8081);
  console.log("Server is listening on http://localhost:8081");