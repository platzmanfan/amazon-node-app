// creating variables for the modules to require


var mysql = require("mysql");
// var inquirer = require("inquirer");

// creating connection object with the localhost and connecting with our database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});


connection.connect(function(err){
    if (err) throw err;

    // start();
    console.log("connected as id " + connection.threadId);
    showAllProducts();
    connection.end();
    
});
function showAllProducts(){
    connection.query("SELECT * from products", function(err,res){
        console.log("----------------------------");
        if(err) throw err;
        for (var i =0; i< res.length; i++){
            console.log("LISTING ALL PRODUCTS FOR SALE");
            console.log("ID |" +res[i].id + " |  NAME:   | "  + res[i].product_name + " |  PRICE:   | "+ res[i].price);
        }
    });
}








