// creating the module packages

var mysql = require("mysql");
var inquirer = require("inquirer");

// creating a connection to our database and getting an object

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database:"bamazon"
});
// establishing connection
connection.connect(function(err){
    if(err) throw err;

    searchChoice();
});
//creating  function that give use choices


function searchChoice(){
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
    console.log(answer)// should commented
    switch(answer.search){
        case "View Products for Sale":
            viewProducts();
            break;

        case "View Low Inventory":
            viewLowInventory();
            break;  
        case "Add New Product":
            createNewProduct();
            break;
        case "exit":
            connection.end();
             break;
    }

})
}

function viewProducts(){
    connection.query("SELECT * from products", function(err,res){
        if (err) throw err;
        for (var i =0;i<res.length;i++){
            console.log("ID |  " +res[i].id+ "| NAME: "+ res[i].product_name + " | PRICE : "+ res[i].price + " |   QUANTITY : "+res[i].stock_quantity)
        }
    })
}
function viewLowInventory(){
    connection.query("SELECT * from products", function(err,res){
        if(err) throw err;
        for (var i =0; i<res.length;i++){
            if(res[i].stock_quantity <= 5){
                console.log("ID |  " +res[i].id+ "| NAME: "+ res[i].product_name + " | PRICE : "+ res[i].price+ " |   QUANTITY : "+res[i].stock_quantity);
            }
            
        }
        
    })
}
function createNewProduct(){
    inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"What is the name of the product you would like to add?!"
        },
        {
            name:"dname",
            type:"input",
            message:"In what department this product belongs to?!"
        },
        {
            name:"price",
            type:"input",
            message: "What would the price be on this product?"
        },
        {
            name:"stock",
            type:"input",
            message:"How many you want to add to the stock?!"
        }
    ]).then(function(answer){
        connection.query("INSERT INTO products SET ?" ,{
            product_name:answer.name,
            department_name:answer.dname,
            price:answer.price,
            stock_quantity:answer.stock
        
            },function(err){
                if (err) throw err;
                console.log("YOUR PRODUCT WAS ADDED SUCCESFULLY!")
            }
        );
    });
}