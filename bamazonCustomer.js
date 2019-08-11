var mysql = require("mysql-promise")();
var inquirer = require("inquirer");

mysql.configure({
    "host": "localhost",
    //port: 3306 ,
    "user": "nodeuser",
    "password": "password",
    "database": "bamazon"
});

  
showProductsToCustomer();

function showProductsToCustomer(){
    mysql.query('SELECT * FROM Products').then(function () {
  
        return mysql.query('SELECT * FROM Products');

    }).spread(function (rows) {
        console.table(rows);
        getProductIDData();
    }); 

}
  
  function getProductIDData(){

    inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "What is the ID of the product you would like to buy?"
  
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      console.log(answer);
      makeQuery(answer);
    });
  }


  function getProductQuantityData(){
    inquirer
    .prompt({
      name: "productQuantity",
      type: "input",
      message: "How much items do you need?"
  
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      console.log(answer);
      
    });
  }


  function makeQuery(element){


        mysql.query('SELECT product_name, stock_quantity FROM Products WHERE ?', element).then(function () {
      
            return mysql.query('SELECT product_name, stock_quantity FROM Products WHERE ?', element);
    
        }).spread(function (rows) {
            console.log('How many of ' + row[0].product_name + " you want you to buy? We have only" + rows[0].stock_quantity + " items.");
            getProductQuantityData();
        }); 
    

  }