//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dates = require(__dirname + "/date.js")

const app = express();






console.log(dates());



var items = [];

app.set("view engine", "ejs")


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));




app.get("/", function(req, res) {
  let day = dates();
res.render("list", {kindOfday: day,newItem: items})

});


app.post("/",function(req,res){

  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})






app.get("/about",function(req,res){
  res.render("aboutus")
})









app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
