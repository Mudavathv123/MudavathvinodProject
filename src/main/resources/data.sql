INSERT INTO artists (artistname, artistimageurl) VALUES
('Pritam', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205318/MyMiniProjectsImages/v7wft6oadbvylx9mmuso.png'),
('Arijit Singh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205728/MyMiniProjectsImages/jfzzds1mcxhzlx88kbcw.png'),
('A.R. Rahman', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205376/MyMiniProjectsImages/l7kfurk5r4wlhde8vzza.png'),
('Sachin Jigar', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205428/MyMiniProjectsImages/vppoiifdovdqtyyape0r.png'),
('Anirudh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205464/MyMiniProjectsImages/gqenatlkoucf5th2zxrt.png'),
('Vishal Mishra', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205501/MyMiniProjectsImages/e3wnq1cdbvj2tqycgnxw.png'),
('Artif Aslam', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205541/MyMiniProjectsImages/qgwtzp0gjfomithhmk70.png'),
('kk', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205581/MyMiniProjectsImages/nipyqg8a0jx9kwcrlnup.png'),
('Karan Ajula', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205620/MyMiniProjectsImages/fqign69vtcx1sbzfyrag.png'),
('Sonu Nigam', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1721205620/MyMiniProjectsImages/fqign69vtcx1sbzfyrag.png');


INSERT INTO albums (albumname, description, albumartist, releasedate, totalsongs, totalduration, albumimageurl,albumbheaderbgcolor,albumbbgcolor)
VALUES 
('4:44', 'A personal and reflective album by Jay-Z.', 'JAY-Z', '2017-06-30', 10, '36:11','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236531/MyMiniProjectsImages/txbgvbcpeqgvfgvynjby.png', '#a47c48','#c6c386'),
('Thriller', 'The best-selling album of all time by Michael Jackson.', 'Michael Jackson', '1982-11-30', 9, '42:19','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236574/MyMiniProjectsImages/v3t7apjktbcibufljsoa.png','#0b424e','#528881'),
('Back in Black', 'The iconic album by AC/DC.', 'AC/DC', '1980-07-25', 10, '41:59','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236608/MyMiniProjectsImages/lougtzhdwmkbseustpky.png','#6d3a04','#ac6215'),
('Abbey Road', 'The final studio album by The Beatles.', 'The Beatles', '1969-09-26', 17, '47:23','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236638/MyMiniProjectsImages/ruub7ghhryme1t0vof9i.png','#ada9a9','#eeeeee'),
('The Dark Side of the Moon', 'The progressive rock album by Pink Floyd.', 'Pink Floyd', '1973-03-01', 10, '42:49','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236673/MyMiniProjectsImages/claa9xmh5jb0jbwrgixe.png','#a51d13','#f51807'),
('Rumours', 'A soft rock album by Fleetwood Mac.', 'Fleetwood Mac', '1977-02-04', 11, '39:43','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236711/MyMiniProjectsImages/q5wppzetbeddxt0gkgql.png','#8a8a8a','#dce9eb'),
('Random Access Memories', 'The fourth studio album by Daft Punk.', 'Daft Punk', '2013-05-17', 13, '74:25','https://res.cloudinary.com/dnml2vs6t/image/upload/v1721236964/MyMiniProjectsImages/ps0e5hodgaz6iunogyum.png','#36265f','#513e81');



INSERT INTO songs (songname, songartist, singer, songcoresh, songduration, albumid)
VALUES 
('Kill Jay Z', 'JAY-Z', 'JAY-Z', 'Various', '2:58', 1),
('The Story of O.J.', 'JAY-Z', 'JAY-Z', 'Various', '3:52', 1),
('Smile', 'JAY-Z', 'JAY-Z, Gloria Carter', 'Various', '4:50', 1),
('Caught Their Eyes', 'JAY-Z', 'JAY-Z, Frank Ocean', 'Various', '3:26', 1),
('4:44', 'JAY-Z', 'JAY-Z', 'Various', '4:44', 1),
('Thriller', 'Michael Jackson', 'Michael Jackson', 'Rod Temperton', '5:57', 2),
('Beat It', 'Michael Jackson', 'Michael Jackson', 'Michael Jackson', '4:18', 2),
('Billie Jean', 'Michael Jackson', 'Michael Jackson', 'Michael Jackson', '4:54', 2),
('Wanna Be Startin Somethin', 'Michael Jackson', 'Michael Jackson', 'Michael Jackson', '6:03', 2),
('Human Nature', 'Michael Jackson', 'Michael Jackson', 'Steve Porcaro, John Bettis', '4:05', 2),
('Hells Bells', 'AC/DC', 'AC/DC', 'Various', '5:12', 3),
('Shoot to Thrill', 'AC/DC', 'AC/DC', 'Various', '5:17', 3),
('Back in Black', 'AC/DC', 'AC/DC', 'Various', '4:15', 3),
('You Shook Me All Night Long', 'AC/DC', 'AC/DC', 'Various', '3:30', 3),
('Rock and Roll Aint Noise Pollution', 'AC/DC', 'AC/DC', 'Various', '4:15', 3),
('Come Together', 'The Beatles', 'The Beatles', 'Lennon–McCartney', '4:19', 4),
('Something', 'The Beatles', 'The Beatles', 'George Harrison', '3:02', 4),
('Octopuss Garden', 'The Beatles', 'The Beatles', 'Ringo Starr', '2:51', 4),
('Here Comes The Sun', 'The Beatles', 'The Beatles', 'George Harrison', '3:05', 4),
('She Came In Through the Bathroom Window', 'The Beatles', 'The Beatles', 'Lennon–McCartney', '1:57', 4),
('Speak to Me', 'Pink Floyd', 'Pink Floyd', 'Mason', '1:30', 5),
('Breathe', 'Pink Floyd', 'Pink Floyd', 'Waters, Gilmour, Wright', '2:43', 5),
('Time', 'Pink Floyd', 'Pink Floyd', 'Waters, Gilmour, Wright, Mason', '6:53', 5),
('Money', 'Pink Floyd', 'Pink Floyd', 'Waters', '6:22', 5),
('Us and Them', 'Pink Floyd', 'Pink Floyd', 'Waters, Wright', '7:49', 5),
('Dreams', 'Fleetwood Mac', 'Fleetwood Mac', 'Stevie Nicks', '4:17', 6),
('Go Your Own Way', 'Fleetwood Mac', 'Fleetwood Mac', 'Lindsey Buckingham', '3:43', 6),
('The Chain', 'Fleetwood Mac', 'Fleetwood Mac', 'Fleetwood Mac', '4:30', 6),
('Dont Stop', 'Fleetwood Mac', 'Fleetwood Mac', 'Christine McVie', '3:11', 6),
('You Make Loving Fun', 'Fleetwood Mac', 'Fleetwood Mac', 'Christine McVie', '3:31', 6),
('Get Lucky', 'Daft Punk, Pharrell Williams', 'Pharrell Williams', 'Thomas Bangalter, Guy-Manuel de Homem-Christo, Pharrell Williams', '6:09', 7),
('Instant Crush', 'Daft Punk, Julian Casablancas', 'Julian Casablancas', 'Thomas Bangalter, Guy-Manuel de Homem-Christo, Julian Casablancas', '5:37', 7),
('Doin'' It Right', 'Daft Punk, Panda Bear', 'Panda Bear', 'Thomas Bangalter, Guy-Manuel de Homem-Christo, Panda Bear', '4:11', 7);