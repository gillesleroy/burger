var express = require("express");
var path = require("path");
// var friends = require("./app/data/friends.js");
// const PORT = 3000;
var burger = require("../models/burger.js");
// const PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();

var exphbs = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// router.get("/", function(req, res) {
//     res.send('Hello from api GET friends route.');
// //     burger.all(function(data) {
// //       var hbsObject = {
// //         burger: data
// //       };
// //       console.log(hbsObject);
// //    //   res.render("index", hbsObject);
// //     });
//   });

app.get('/', function(req, res) {
    // res.send('Hello from api GET all burgers route.');
    //res.sendFile(path.join(__dirname, "./../public/friends.html"));
    burger.all(function(data) {
              var dataObj = {
                burger: data
              };
              console.log(dataObj);
              res.render("index", dataObj.burger[0]);
            });
  });
 
app.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var dataObj = {
          burger: data
        };
        console.log(dataObj);
        res.render("burgers", {
            foods: dataObj.burger,
            eater: "Gilles"
        });
      });

});  


// app.get('/burgers', function(req, res) {
// // res.send('Hello from api GET friends route.');
// res.send(friends.friends);
// });

module.exports = app;
