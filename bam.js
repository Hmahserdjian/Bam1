// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
require('console.table');
// Creating a connection to SQL

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as item_id" + connection.threadId)
    display_products();
});

function display_products() {
    console.log("Welcome to Bamazon!")

    inquirer.prompt([{
        type: "list",
        name: "buy",
        message: "Would like to buy an bamzing item?",
        choices: [
            'yes',
            'no'
        ]
    }]).then(answers => {
        // if (answers.buy ==  "Choose product by ID? ") {
        //     itemId();
        // }
        // if (answers.buy == "Purchase this bamazing item? ") {
        //     buyId();
        // }
        if (answers.buy == "no") {
            console.log("ok bye!");
        } else {
            read_products();

        }
    })
};

function read_products() {
    connection.query(
        "SELECT * FROM products",
        function (err, products) {
                if (err)  {
                    throw err;

                }
                else {
                    console.table(products);
                                }
          
            // for (let i = 0; i < products.length; i++) {

            // }
            buyId()
        }
    )

}

function buyId() {
    console.log("Buy an bamazing item?");
    inquirer.prompt(
            [{
                    type: 'input',
                    name: 'item',
                    message: "Choose a bamazing item by ID?"
                },
                {
                    type: 'input',
                    name: 'buy',
                    message: 'How many bamazing Products would you like to purchase?'
                }
            ])
        // console.log(buyId);

        .then(answers => {
                var query = connection.query(
                        "SELECT * FROM products WHERE item_id = ?", [parseInt(answers.item)], function (err, res) {
                            if (err) throw err;
                            console.table(res);
                        }
                )
                
                        // {
                        //     // item: answers.item,
                        //     // item_buy: answers.buy,
                        //     // price: parseInt(answers.price),
                        //     // price: parseInt(answers.price),
                        //     // stock_quantity: parseInt(answers.stock_quantity)

                }
        )}
                //         function (err, res) {
                //             console.log("item bought" + answers.item + "to Bamazon!")
                //             startUp();
                //         }
                //     )
                // })
                // function display_products() {
                //     var query = connection.query(
                //         "SELECT * FROM item_id", 
                //     function (err, product) {
                //         if (err) throw err;
                //         var items =[];
                //         for (let i = 0; i < products.length; i++) {
                //             item.push(product[i].item_id);

                //         }
                //         console.log(item);
                //     }
                //     )