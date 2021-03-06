// creating variables for the modules to require


var mysql = require("mysql");
var inquirer = require("inquirer");

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
    searchProductsId();
    
    // connection.end();
    
});

// listing all the products function that dipslay upon running the app


function showAllProducts(){
    connection.query("SELECT * from products", function(err,res){
        console.log("\n----------------------------");
        if(err) throw err;
        console.log("LISTING ALL PRODUCTS FOR SALE\n");
        for (var i =0; i< res.length; i++){
            
            console.log("ID |" +res[i].id + " |  NAME: | "  + res[i].product_name + " |  PRICE: | "+ res[i].price+"$");
        }
    });
    
}

// creating the prompts to ask for id and stock how many unit they want

function searchProductsId(){
    inquirer.
    prompt([
        {
        name: "id",
        type: "input",
        message: "Enter the ID of the product you would like to buy?"
    },
    {
        name: "stock_quantity",
        type: "input",
        message: "How many units you want to buy from this product?"
    }
            ])
    .then(function(answer){
        // console.log(answer.id);  // should be commented 
        // console.log(answer.stock_quantity); // should be commented
        
        connection.query("SELECT * FROM products WHERE ?" , {id:answer.id} , function(err,res){
            if (err) throw err;
            
            for (var i = 0;i<res.length; i++){
           
                var result = res[i].stock_quantity - answer.stock_quantity;
            if (res[i].stock_quantity >= answer.stock_quantity){
                result = res[i].stock_quantity - answer.stock_quantity;
                // console.log(res[i].product_name);// 
                console.log("-----------------------");
                console.log("THANK YOU DOING BUSINESS WITH US\n")
                console.log("THERE ARE " + result ,res[i].product_name+ "  Left in our stock");
                console.log("---------------------------\n");
                console.log("YOUR TOTAL COST IS GONNA BE  "+ " = "+(res[i].price * answer.stock_quantity) +"$\n")
                
          connection.query("UPDATE products SET stock_quantity =? WHERE id =? ",[result,answer.id], function(err,res){
            if (err) throw err;
            
            console.log(res.affectedRows + "  updated product/s in our Database");
                //  console.log(res.stock_quantity);
            
    

        })

            }
           else{
               console.log("Insufficient quantity!");
           }   
            }
        
        
    });  
}); 
}






