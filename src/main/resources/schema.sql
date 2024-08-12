CREATE TABLE IF NOT EXISTS artists(
    artistid INTEGER PRIMARY KEY AUTO_INCREMENT,
    artistname VARCHAR(500),
    artistimageurl TEXT
);



CREATE TABLE IF NOT EXISTS albums(
    albumid INTEGER primary key AUTO_INCREMENT,
    albumname VARCHAR(500),
    description VARCHAR(500),
    albumartist VARCHAR(500),
    releasedate VARCHAR(200),
    totalsongs INTEGER,
    totalduration VARCHAR(200),
    albumimageurl Text,
    albumbheaderbgcolor VARCHAR(200),
    albumbbgcolor VARCHAR(200)
);


CREATE TABLE IF NOT EXISTS songs(
    songid INTEGER primary key AUTO_INCREMENT,
    songname VARCHAR(500),
    songartist VARCHAR(500),
    singer VARCHAR(500),
    songcoresh VARCHAR(500),
    songduration VARCHAR(250),
    albumid INTEGER,
    foreign key (albumid) references albums(albumid)
);


CREATE TABLE IF NOT EXISTS radio (
    radioid INTEGER PRIMARY KEY AUTO_INCREMENT,
    radioimage TEXT,
    artistname VARCHAR(500),
    moreartists VARCHAR(700),
    saves INTEGER,
    radioheaderbgcolor VARCHAR(200),
    radiobgcolor VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS radiosongs (
    radiosongid INTEGER PRIMARY KEY AUTO_INCREMENT,
    songname VARCHAR(250),
    singers TEXT,
    songimage TEXT,
    albumname VARCHAR(500),
    songduration VARCHAR(200),
    radioid INTEGER,
    FOREIGN KEY (radioid) REFERENCES radio(radioid)
    
);

