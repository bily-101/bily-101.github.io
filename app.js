var express = require('express');

var app = express()

app.get("/",function (req,res){

    res.render("main.ejs")
})


app.listen(8080, () => {
  console.log(`running`)
})