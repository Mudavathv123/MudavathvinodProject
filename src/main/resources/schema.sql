CREATE TABLE if not exists movielist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movieId INT,
    movieName VARCHAR(255),
    leadActor VARCHAR(255)
);