-- DROP table artist_gallery;
-- DROP table art;
-- DROP table artist;
-- DROP table gallery;



CREATE TABLE IF NOT EXISTS artist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(225),
    genre VARCHAR(225)
);

CREATE TABLE IF NOT EXISTS art (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(225),
    theme VARCHAR(225),
    artistid INT,
    FOREIGN KEY (artistid) REFERENCES artist(id)
);

create table if not exists gallery(
    id int primary key auto_increment,
    name varchar(225),
    location varchar(225)
);

create table if not exists artist_gallery(
    artistid int,
    galleryid int,
    primary key (artistid, galleryid),
    foreign key (artistid) references artist(id),
    foreign key (galleryid) references gallery(id)
);