-- drop TABLE researcher_project;
-- drop TABLE Researcher;
-- drop TABLE Project;


CREATE TABLE Researcher (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    specialization VARCHAR(255)
);

CREATE TABLE Project (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    budget DOUBLE
);



CREATE TABLE  researcher_project (
    researcherid INT,
    projectid INT,
    PRIMARY KEY (researcherid, projectid),
    FOREIGN KEY (researcherid) REFERENCES Researcher(id),
    FOREIGN KEY (projectid) REFERENCES Project(id)
);

