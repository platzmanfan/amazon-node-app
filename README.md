# bamazon mysql & node.js app

## This app is creating using node.js and mysql database



# bamazon app overview

### What is bamazon ?!  

bamazon is an app similar to amazon where it's connected to database that has table that has stores some information about some products!!!

My table has:
1. Name of the product
2. Name of the department
3. Price
4. Stock quantity

I created 2 files: 
* bamazonCustomer.js

* bamazonManager.js

Both files are allowing the user to see something and make order, add new order,add stock and view all the items that are currently in the database.

Both files are using prompt so it will ask the user for info about the product or to create new upon loading them.


# Orgranizations of the app

## bamazonCustomer.js

### First i created variable for the modules (mysql and inquier)
### Established connection to my database and returned and object
### used that object to call connect function
### inside connect callbaack function im calling my other functions!
### i have create function that is gonna display all the items from the database 
### i created a functon that is gonna find stock  quantity of certain item and reduce by the amount the person ordered
### updated the sql for the amount the person entered


## running bamazonCustomer.js

### node bamazonCustomer.js gives us the app running and it first displays all items inside and give us prompt where it ask the user which item to choose to from to buy
### after the user chooses id , it gives us another prompt where it ask us how many of those he wants
### at the end program update the mysql database and tell the customer how much is that gonna cost him
### if the stock is lower than the order it's gonna be print "Insuffficient Stock"

## below i will provide the link to the video to how the app runs


## bamazonManager.js

## this program gonna take the same mysql database that i worked prior

## i created connection and call the connect function from the object
## then i created prompt with list where the user is gonna be asked what he wants to choose:
1. View Products for Sale
2. View Low Inventory
3. Add to Inventory
4. Add New Product

## Then i created switch function which is gonna be called whatever is choose from
## i created 4 functions that is gonna be called in each of the switch cases

## When user choose to view the products it's gonna display the: id,name,department_name,price,stock of the products

## When user choose to view low inventory it's gonna display the items with less than 5 stock quantity in the databse

## when user decide to add to inventort it's gonna give us prompt where it's gonna ask the user for id of the product! When the user chooses id then it ask him how many he would like to add up to the stock!  Then it update our mySql Database!

## when user decide to add completely new product it's gonna ask him few questions about the name,deparment name, price, stock ! upon entering all of these it's gonna be updated our mySql and the new product it's gonna be ready for sale!



