/*Create a new Node application called bamazonManager.js. Running this application will:


List a set of menu options:
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product
If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.




*/

var mysql = require("mysql-promise")();
var inquirer = require("inquirer");

mysql.configure({
    "host": "localhost",
    //port: 3306 ,
    "user": "nodeuser",
    "password": "password",
    "database": "bamazon"
});
inquirer.prompt({
              name: "productQuantity",
              type: "list",
              choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
              message: "What action would you like to perform?"
          
            })
            .then(function(answer) {
              // based on their answer, either call the bid or the post functions
              console.log(answer);
              switch(answer.productQuantity) {
                case "View Products for Sale":
                viewProductsforSale();
                  break;
                case "View Low Inventory":
                  // code block
                  break;
                case "Add to Inventory":
                  // code block
                  break;
                case "Add New Product":
                  // code block
                  break;
              }

            });

function viewProductsforSale(){
    mysql.query('SELECT * FROM Products').then(function () {

        return mysql.query('SELECT * FROM Products');

    }).spread(function (rows) {
        console.table(rows);

    }); 
}