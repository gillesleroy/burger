var connection = require("./connection.js");

// all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

var orm = {
    selectAll: function (cb)
    {
        var query = connection.query(
        "SELECT * FROM BURGERS"
        , function(err, result) {
          if (err) throw err;
       //   console.log(result);
          cb(result);
        });    
    }

    // insertOne: function(burgerName)
    // {
    //     var query = connection.query(
    //         "INSERT INTO BURGERS SET ?",
    //         {
    //           burger_name: burgerName
    //         },
    //         function(err, res) {
    //           console.log(res.affectedRows + " burger inserted!\n");
    //         }
    //       );
    // },

    // updateOne: function(burgerId)
    // {
    //     var query = connection.query(
    //         "UPDADE BURGERS SET DEVOURED = true WHERE ID = ?",
    //         {
    //           id: burgerId
    //         },
    //         function(err, res) {
    //           console.log(res.affectedRows + " burger updated!\n");
    //         }
    //       );
    // }
  };
  
  module.exports = orm;


