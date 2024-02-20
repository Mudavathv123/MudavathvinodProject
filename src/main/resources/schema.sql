


create table if not exists Restaurant(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(225),
    address varchar(225),
    cuisinetype varchar(225),
    rating INT 
);


create table if not exists Chef(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname varchar(225),
    lastname varchar(225),
    expertise varchar(225),
    experienceyears INT,
    restaurantId INT,
    FOREIGN KEY (restaurantId) REFERENCES Restaurant(id)
);
