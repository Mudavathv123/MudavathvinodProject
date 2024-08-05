-- Insert into artist table
INSERT INTO artist(name, genre) VALUES ('Leonardo da Vinci', 'Renaissance');
INSERT INTO artist(name, genre) VALUES ('Vincent van Gogh', 'Post-Impressionism');
INSERT INTO artist(name, genre) VALUES ('Pablo Picasso', 'Cubism');
INSERT INTO artist(name, genre) VALUES ('Edward Hopper', 'American Modernism');

-- Insert into art table
INSERT INTO art(title, theme, artistid) VALUES ('The Flight Study', 'Studies of Bird Wings', 1);
INSERT INTO art(title, theme, artistid) VALUES ('Mona Lisa 2.0', 'Renaissance Portrait', 1);
INSERT INTO art(title, theme, artistid) VALUES ('Starry Countryside', 'Night Landscape', 2);
INSERT INTO art(title, theme, artistid) VALUES ('Sunflower Impressions', 'Floral', 2);
INSERT INTO art(title, theme, artistid) VALUES ('Cubist Self-Portrait', 'Abstract Portrait', 3);
INSERT INTO art(title, theme, artistid) VALUES ('Barcelona Abstracted', 'City Landscape', 3);
INSERT INTO art(title, theme, artistid) VALUES ('Downtown Solitude', 'Urban Scene', 4);
INSERT INTO art(title, theme, artistid) VALUES ('Night Cafe Redux', 'Modernist Interior', 4);

-- Insert into gallery table
INSERT INTO gallery(name, location) VALUES ('Louvre Museum', 'Paris');
INSERT INTO gallery(name, location) VALUES ('Van Gogh Museum', 'Amsterdam');
INSERT INTO gallery(name, location) VALUES ('Museo Picasso', 'Barcelona');
INSERT INTO gallery(name, location) VALUES ('Museum of American Art', 'New York');

-- Insert into artist_gallery table
INSERT INTO artist_gallery(artistid, galleryid) VALUES (1, 1);
INSERT INTO artist_gallery(artistid, galleryid) VALUES (1, 2);
INSERT INTO artist_gallery(artistid, galleryid) VALUES (2, 2);
INSERT INTO artist_gallery(artistid, galleryid) VALUES (3, 3);
INSERT INTO artist_gallery(artistid, galleryid) VALUES (3, 4);
INSERT INTO artist_gallery(artistid, galleryid) VALUES (4, 4);
