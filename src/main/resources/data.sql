INSERT INTO Researcher (id, name, specialization) VALUES 
(1, 'Marie Curie', 'Radioactivity');

INSERT INTO Researcher (id, name, specialization) VALUES 
(2, 'Albert Einstein', 'Relativity');

INSERT INTO Researcher (id, name, specialization) VALUES 
(3, 'Isaac Newton', 'Classical Mechanics');

INSERT INTO Researcher (id, name, specialization) VALUES 
(4, 'Niels Bohr', 'Quantum Mechanics');


INSERT INTO Project (id, name, budget) VALUES 
(1, 'Project Alpha', 50000.00);

INSERT INTO Project (id, name, budget) VALUES 
(2, 'Project Beta', 100000.00);

INSERT INTO Project (id, name, budget) VALUES 
(3, 'Project Gamma', 150000.00);

INSERT INTO Project (id, name, budget) VALUES 
(4, 'Project Delta', 75000.00);


INSERT INTO researcher_project (researcherid, projectid) VALUES (1, 1);

INSERT INTO researcher_project (researcherid, projectid) VALUES (1, 2);

INSERT INTO researcher_project (researcherid, projectid) VALUES (2, 2);

INSERT INTO researcher_project (researcherid, projectid) VALUES (3, 3);

INSERT INTO researcher_project (researcherid, projectid) VALUES (3, 4);

INSERT INTO researcher_project (researcherid, projectid) VALUES (4, 4);
