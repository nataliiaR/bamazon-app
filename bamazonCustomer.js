var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306 ,
    user: "nodeuser",
    password: "password",
    database: "bamazon"
});



connection.query('SELECT * FROM Products', function (error, results) {
    if (error) throw error;
    // `results` is an array with one element for every statement in the query:
    console.table(results); // [{1: 1}]
    getProductIDData();
    connection.end();

  });
  
  function getProductIDData(){
    inquirer
    .prompt({
      name: "selectProduct",
      type: "input",
      message: "What is the ID of the product you would like to buy?"
  
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      console.log(answer);
      
    });
  }


