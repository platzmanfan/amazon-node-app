
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  id INTEGER(100) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price INT(100),
  stock_quantity INT(20),
  PRIMARY KEY (id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Iphone 8+","Electronics", 400,9);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Zara man shoes","Footwear", 80,5);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Dell Laptop","Electronics", 500,3);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Lakers Jersey","Apparel", 80,6);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Pulp Fiction Poster","Art", 30,15);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Apple Airpods","Electronics", 150,2);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("The Da Vinci Code","Book", 30,25);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Amazon Alexa","Electronics", 25,10);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Temper Colors","Art", 15,4);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Playstation 4","Electronics", 200,2);
-- flush privileges;
SELECT * from products;














 






