CREATE TABLE if NOT EXISTS professor (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(500),
    department VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS course (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(500),
    credits INTEGER,
    professorid INTEGER,
    FOREIGN KEY (professorid) REFERENCES professor(id)
);

CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(500),
    email TEXT
);

CREATE TABLE IF NOT EXISTS course_student (
    courseid INTEGER,
    studentid INTEGER,
    PRIMARY KEY(courseid, studentid),
    FOREIGN KEY (courseid) REFERENCES course(id),
    FOREIGN KEY (studentid) REFERENCES student(id)
);

