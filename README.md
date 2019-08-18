# bamazon-app

1. bamazonCustomer.js. 

Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

EXAMPLES : 

 node bamazonCustomer.js 
┌─────────┬─────────┬──────────────┬─────────────────┬───────┬────────────────┐
│ (index) │ item_id │ product_name │ department_name │ price │ stock_quantity │
├─────────┼─────────┼──────────────┼─────────────────┼───────┼────────────────┤
│    0    │    1    │    'milk'    │    'grocery'    │   4   │      300       │
│    1    │    2    │   'bread'    │    'grocery'    │   3   │      490       │
│    2    │    3    │   'coffee'   │    'grocery'    │  10   │       22       │
│    3    │    4    │ 'dish soap'  │   'household'   │   5   │      349       │
│    4    │    5    │ 'detergent'  │   'household'   │  13   │      496       │
│    5    │   10    │   'coffee'   │    'grocery'    │   7   │       45       │
│    6    │   11    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    7    │   12    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    8    │   13    │   'cheese'   │    'grocery'    │   6   │      600       │
└─────────┴─────────┴──────────────┴─────────────────┴───────┴────────────────┘
? What is the ID of the product you would like to buy? 10
? How many of coffee you want you to buy? We have only 45 items. With this price  7
? How much items do you need? 20
we have product available
Your total for coffee is 140
┌─────────┬─────────┬──────────────┬─────────────────┬───────┬────────────────┐
│ (index) │ item_id │ product_name │ department_name │ price │ stock_quantity │
├─────────┼─────────┼──────────────┼─────────────────┼───────┼────────────────┤
│    0    │    1    │    'milk'    │    'grocery'    │   4   │      300       │
│    1    │    2    │   'bread'    │    'grocery'    │   3   │      490       │
│    2    │    3    │   'coffee'   │    'grocery'    │  10   │       25       │
│    3    │    4    │ 'dish soap'  │   'household'   │   5   │      349       │
│    4    │    5    │ 'detergent'  │   'household'   │  13   │      496       │
│    5    │   10    │   'coffee'   │    'grocery'    │   7   │       25       │
│    6    │   11    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    7    │   12    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    8    │   13    │   'cheese'   │    'grocery'    │   6   │      600       │
└─────────┴─────────┴──────────────┴─────────────────┴───────┴────────────────┘


2. bamazonManager.js. 

Running this application will be able to: 
View Products for Sale (the app will list every available item: the item IDs, names, prices, and quantities)
View Low Inventory (the app will list all items with an inventory count lower than five)
Add to Inventory (the app will display a prompt that will let "add more" of any item currently in the store)
Add New Product (ithe app will display prompts to allow the manager to add a completely new product to the store)

EXAMPLES :

node bamazonManager.js 
? What action would you like to perform? 
  View Products for Sale 
  View Low Inventory 
  Add to Inventory 
❯ Add New Product 
┌─────────┬─────────┬──────────────┬─────────────────┬───────┬────────────────┐
│ (index) │ item_id │ product_name │ department_name │ price │ stock_quantity │
├─────────┼─────────┼──────────────┼─────────────────┼───────┼────────────────┤
│    0    │    1    │    'milk'    │    'grocery'    │   4   │      300       │
│    1    │    2    │   'bread'    │    'grocery'    │   3   │      490       │
│    2    │    3    │   'coffee'   │    'grocery'    │  10   │       25       │
│    3    │    4    │ 'dish soap'  │   'household'   │   5   │      349       │
│    4    │    5    │ 'detergent'  │   'household'   │  13   │      496       │
│    5    │   10    │   'coffee'   │    'grocery'    │   7   │       25       │
│    6    │   11    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    7    │   12    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    8    │   13    │   'cheese'   │    'grocery'    │   6   │      600       │
└─────────┴─────────┴──────────────┴─────────────────┴───────┴────────────────┘
? What department would you like to add product to? (Use arrow keys)
❯ grocery 
  household 
? What is a new product name you want to add chesse
? What price would you like to set for cheese? 13
? What quantity would you like to set for cheese? 200
┌─────────┬─────────┬──────────────┬─────────────────┬───────┬────────────────┐
│ (index) │ item_id │ product_name │ department_name │ price │ stock_quantity │
├─────────┼─────────┼──────────────┼─────────────────┼───────┼────────────────┤
│    0    │    1    │    'milk'    │    'grocery'    │   4   │      300       │
│    1    │    2    │   'bread'    │    'grocery'    │   3   │      490       │
│    2    │    3    │   'coffee'   │    'grocery'    │  10   │       25       │
│    3    │    4    │ 'dish soap'  │   'household'   │   5   │      349       │
│    4    │    5    │ 'detergent'  │   'household'   │  13   │      496       │
│    5    │   10    │   'coffee'   │    'grocery'    │   7   │       25       │
│    6    │   11    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    7    │   12    │ 'sour cream' │    'grocery'    │   5   │      284       │
│    8    │   13    │   'cheese'   │    'grocery'    │   6   │      600       │
│    9    │   14    │   'cheese'   │    'grocery'    │  13   │      200       │
└─────────┴─────────┴──────────────┴─────────────────┴───────┴────────────────┘