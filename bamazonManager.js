// creating the module packages

var mysql = require("mysql");
var inquirer = require("inquirer");

// creating a connection to our database and getting an object

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    databae:"bamazon"
});

connection.connect(function(err){
    if(err) throw err;

    search();
});

function search(){
inquirer.prompt({
name:"search",
type: "list",
message:"What would you like to do?",
choices:[
    "View Products for Sale",
    "View Low Inventory",
    "Add to Inventory",
    "Add New Product",
    "exit"
]})
.then(function(answer){
    console.log(answer)
})
}