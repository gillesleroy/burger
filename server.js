var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./controllers/burgers_controller.js'));

app.listen(PORT,function () {
console.log("Listening on port:"+PORT)    
});