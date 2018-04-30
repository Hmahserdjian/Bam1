DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id  INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(55) NULL,
  department_name VARCHAR(55)NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("XBOX ONE", "Electronics", 499.99, 25), ("Playstation 4", "Electronics", 399.99, 15), ("Dark Souls 3", "Video Games", 29.99, 55),
("Far Cry 5", "video Games", 59.99, 300), ("God of War", "Video Games", 59.99, 4503), ("Taranis Q X7", "Toys", 129.99, 357), 
("Holybro Kopis 1 210mm FPV Racing Drone ", "RC", 288.00, 10), ("Spider-Man: Homecoming", "Movies", 9.99, 365), ("Logan", "Movies", 9.99, 321),
("Schylling Cosmic Shock Phaser Light Spinner", "Toy", 9.99, 3564)