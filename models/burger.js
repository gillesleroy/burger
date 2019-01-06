var orm = require("../config/orm.js");

//orm.selectAll();

// Find a pet in the pets table by an animal_name of Rachel.
// orm.insertOne("burger");

// Find the buyer with the most pets.
// orm.updateOne(1);
var burger = {
  all: function(cb) {
      orm.selectAll( function(res) {
        cb(res);
      });
  }
}

// var cat = {
//     all: function(cb) {
//       orm.all("cats", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("cats", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("cats", objColVals, condition, function(res) {
//         cb(res);
//       });
//     }
//   };
module.exports = burger;