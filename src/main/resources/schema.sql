

create table if not exists Sponsor(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(225),
    industry varchar(225)
);

create table if not exists Event(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(225),
    date varchar(225)
);

create table if not exists event_sponsor(
    sponsorId INTEGER,
    eventId INTEGER,
    PRIMARY KEY (sponsorId,eventId),
    FOREIGN KEY (sponsorId) REFERENCES Sponsor(id),
    FOREIGN KEY (eventId) REFERENCES Event(id)
);