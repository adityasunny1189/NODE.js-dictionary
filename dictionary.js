const express = require("express");
const bodyParser = require("body-parser");
const JsonFind = require("json-find");
const test = require("./data.json")

const doc = JsonFind(test);


const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    var name = req.body.num1;
    if(doc.checkKey(name)) {
        res.send(doc.checkKey(name)[0]);
    }else {
        res.send("word not present");
    }
});

app.listen(4000, function(){
    console.log("Server running at 4000");
});


