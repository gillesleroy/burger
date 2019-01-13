var connection = require("../config/connection.js");
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
 
// app.get('/devourBurger', function(req, res) {
//   // res.send('Hello from api GET all burgers route.');
//   //res.sendFile(path.join(__dirname, "./../public/friends.html"));
//   burger.all(function(data) {
//             var dataObj = {
//               burger: data
//             };
//             console.log(dataObj);
//             res.render("index", dataObj.burger[1]);
//           });
// });

app.post("/burger", function(req, res) {
  connection.query("INSERT INTO BURGERS (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
      return res.status(500).end();
    }
    // Send back the ID of the new todo
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

app.put("/devourBurger/:burgerId", function(req, res) {
  console.log("params="+req.params.burgerId);
  console.log("body="+req.body.isDevoured);
  connection.query("UPDATE BURGERS SET DEVOURED = ? WHERE ID = ?", [req.body.isDevoured, req.params.burgerId]
   , function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      throw err;
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  //  burger.updateOne(req.body.devoured,req.params.burgerId);

    // function(data) {
    //     var dataObj = {
    //       burger: data
    //     };
    //     console.log(dataObj);
    //     res.render("burgers", {
    //         foods: dataObj.burger,
    //         eater: "Gilles"
    //     });
    //   }
      // });
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

// app.get("/burgersDevoured", function(req, res) {
//   burger.allDevoured(function(data) {
//       var dataObj = {
//         burger: data
//       };
//       console.log(dataObj);
//       res.render("burgers", {
//           foods: dataObj.burger,
//           eater: "Gilles"
//       });
//     });
// });

app.get("/css/reset", function(req,res) {
  res.sendFile(path.join(__dirname, "./../views/layouts/css/reset.css"));
});
app.get("/css/style", function(req,res) {
  res.sendFile(path.join(__dirname, "./../views/layouts/css/style.css"));
});
app.get("/image/concrete", function(req,res) {
  res.sendFile(path.join(__dirname, "./../views/layouts/images/concrete_seamless.png"));
});
app.get("/image/burger", function(req,res) {
  res.sendFile(path.join(__dirname, "./../views/layouts/images/burger.jpg"));
});
// app.get('/burgers', function(req, res) {
// // res.send('Hello from api GET friends route.');
// res.send(friends.friends);
// });

module.exports = app;
