
CREATE TABLE if not exists product (
    productId INTEGER PRIMARY KEY AUTO_INCREMENT,
    productName TEXT,
    price DOUBLE
);

CREATE TABLE if not exists review (
    reviewId INTEGER PRIMARY KEY AUTO_INCREMENT,
    reviewContent TEXT,
    rating INTEGER,
    productId INTEGER,
    FOREIGN KEY (productId) REFERENCES product(productId)
);