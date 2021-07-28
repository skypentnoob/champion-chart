var express = require("express") // i am copying code
var app = express() // because i am lazy

var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
       res.render("index")
})

app.listen(port, function() {
  console.log("app running")
})
