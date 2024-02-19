

create table if not exists Category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(225),
    description varchar(225)
);



create table if not exists Product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(225),
    description varchar(225),
    price decimal(10,2),
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Category(id)
);

