const http = require("http");
const static = require("node-static");
const file = new static.Server(".");

function accept(req, res) {
    if (req.url == "/vote") {
        // reply after timeout
        setTimeout(()=>{
            res.end("Your vote is accepted: " +  new Date());
        }, 1500);
    } else {
        // otherwise a request is to a regular file - display it
        file.serve(req, res);       // or res.end("wrong link");
    }
  }
  http.createServer(accept).listen(8080);
  console.log("Server is listening on port 8080");