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
                viewLowInventory();
                  break;
                case "Add to Inventory":

                  addtoInventory();
               
              
                  break;
                case "Add New Product":
                addNewProduct();
                  break;
              }

            });

function viewProductsforSale(){
    mysql.query('SELECT * FROM Products').spread(function (rows) {
        console.table(rows);

    }); 
}

function viewLowInventory(){
  var lowInventory = 5;
  mysql.query('SELECT * FROM Products WHERE stock_quantity <= ?',lowInventory).spread(function (rows) {
      console.table(rows);

  }); 
}

function addtoInventory(){
mysql.query('SELECT * FROM Products').spread(function (rows) {
    console.table(rows);
    inquirer.prompt({
      name: "productID",
      type: "input",
      message: "What productID would you like to add inventory to?"
  
    }).then(function(answer){
      console.log("productId "+ answer.productID);
      var productId = answer.productID
      inquirer.prompt({
        name: "newQuantity",
        type: "input",
        message: "What quantity of " + answer.productID +" would you like to add to existing inventory?"
    
      }).then(function(answer){
        var additionalInventory = answer.newQuantity;

        mysql.query('UPDATE Products SET stock_quantity = stock_quantity + ? WHERE item_id = ?', [additionalInventory, productId]).then(function () {

          return  viewProductsforSale();
      });
      })

    })

}); 
             


}