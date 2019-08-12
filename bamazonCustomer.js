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


  function makeProductQuanityQuery(element){


        mysql.query('SELECT product_name, price, stock_quantity FROM Products WHERE ?', element).then(function () {
      
            return mysql.query('SELECT product_name, price, stock_quantity FROM Products WHERE ?', element);
    
        }).spread(function (rows) {
            console.log('How many of ' + rows[0].product_name + " you want you to buy? We have only " + rows[0].stock_quantity + " items. With this price  " + rows[0].price);
           // getProductQuantityData();
            inquirer
            .prompt({
              name: "productQuantity",
              type: "input",
              message: "How much items do you need?"
          
            })
            .then(function(answer) {
              // based on their answer, either call the bid or the post functions
              console.log(answer);
              madeProductPurchase(rows[0].product_name, parseInt(rows[0].stock_quantity),parseInt(answer.productQuantity), parseFloat(rows[0].price));
              
            });

        }); 
    

  }


  // prompts to user
    
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
      makeProductQuanityQuery(answer);

    });
  }


 /* function getProductQuantityData(){
    inquirer
    .prompt({
      name: "productQuantity",
      type: "input",
      message: "How much items do you need?"
  
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      console.log(answer);
      madeProductPurchase(answer.productQuantity);
      
    });
  }*/

  function madeProductPurchase(productName, productQuantity, requestedQuantity,price){

    if(productQuantity>=requestedQuantity){
        console.log("we have product available");
        var updatedQuantity = productQuantity - requestedQuantity;
        var totalPrice = requestedQuantity*price;
        console.log("Your total for " + productName + " is " + totalPrice);
        mysql.query('UPDATE Products SET stock_quantity =? WHERE product_name = ?', [updatedQuantity,productName]).then(function () {
  
            return mysql.query('UPDATE Products SET stock_quantity =? WHERE product_name = ?', [updatedQuantity,productName]);
    
        }).spread(function (rows) {
         
            showProductsToCustomer();
        }); 


    }else {
        console.log("we don't have enough product");
    }

  }