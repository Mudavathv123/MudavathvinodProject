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


INSERT INTO radio (radioimage, artistname, moreartists, saves, radioheaderbgcolor, radiobgcolor)
VALUES 
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723217507/popular_radio/kkl93mapqhrak3flwj5v.png',
    'Arijit Singh Radio',
    'With Neha Kakkar, Pritam, KK and more',
    252423,
    '#FF5733', -- Example header background color
    '#C70039'  -- Example radio background color
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723217594/popular_radio/eptin7fs3yn2pmg3d1ec.png',
    'Diljit Dosanjh Radio',
    'With Garry Sandhu, Ranjit Bawa, Amrinder Gill and more',
    38896,
    '#900C3F',
    '#581845'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723217718/popular_radio/l02txluxrrlpvu7ovti6.png',
    'A.R. Rahman Radio',
    'With Shankar Mahadevan, Anirudh Ravichander, Yuvan Shankar Raja and more',
    55327,
    '#DAF7A6',
    '#FFC300'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723217918/popular_radio/zqbvrknmyrhwoqvrrjuk.png',
    'KK Radio',
    'With Mohit Chauhan, Ankit Tiwari, Javed Ali and more',
    47002,
    '#FF5733',
    '#C70039'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723217941/popular_radio/xrt7fp51ib6mxfpjveik.png',
    'Udit Narayan Radio',
    'With Kumar Sanu, Alka Yagnik, Anuradha Paudwal and more',
    18669,
    '#581845',
    '#900C3F'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723218021/popular_radio/hshsrmtl6drqsuyoaogx.png',
    'Atif Aslam Radio',
    'With Ali Zafar, Rahat Fateh Ali Khan, Asim Azhar and more',
    52590,
    '#FFC300',
    '#DAF7A6'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723218132/popular_radio/klfsif9ancvp6jcsotkm.png',
    'Shreya Ghoshal Radio',
    'With Sonu Nigam, Sunidhi Chauhan, Shaan and more',
    27969,
    '#FF5733',
    '#C70039'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723218204/popular_radio/asjqiwhi2upizswztarx.png',
    'Kumar Sonu Radio',
    'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more',
    21990,
    '#900C3F',
    '#581845'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723218282/popular_radio/m3bvje2ff72ihwnjbmgz.png',
    'Sidhu Moose Wala Radio',
    'With Ammy Virk, Amrit Maan, Karan Aujla and more',
    81893,
    '#DAF7A6',
    '#FFC300'
),
(
    'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723218304/popular_radio/nf521nsnetcu3n5uzqre.png',
    'Karan Aujla Radio',
    'With Arjan Dhillon, Prem Dhillon, Navaan Sandhu and more',
    23156,
    '#FF5733',
    '#C70039'
);



-- data about radioid 1 ralationship with song

INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration,radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58',1),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28',1),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28',1),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48',1),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09',1),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22',1);


-- data about radioid 2 ralationship with song

INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration, radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 2),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 2),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 2),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 2),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 2),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 2),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 2),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 2),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 2),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 2),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 2),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 2),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 2),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 2),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 2),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 2),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 2),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 2);


-- data about radioid 3 ralationship with song
INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration, radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 3),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 3),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 3),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 3),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 3),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 3),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 3),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 3),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 3),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 3),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 3),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 3),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 3),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 3),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 3),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 3),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 3),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 3);


-- data about radioid 4 ralationship with song
INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration, radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 4),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 4),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 4),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 4),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 4),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 4),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 4),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 4),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 4),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 4),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 4),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 4),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 4),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 4),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 4),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 4),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 4),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 4);



-- data about radioid 6 ralationship with song
INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration, radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 6),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 6),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 6),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 6),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 6),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 6),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 6),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 6),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 6),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 6),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 6),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 6),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 6),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 6),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 6),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 6),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 6),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 6);


-- data about radioid 6 ralationship with song
INSERT INTO radiosongs (songname, singers, songimage, albumname, songduration, radioid) VALUES
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 3),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 3),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 3),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 3),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 3),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 3),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 4),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 4),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 4),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 4),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 4),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 4),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 5),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 5),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 5),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 5),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 5),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 5),
('Proper Patola', 'Badshah, Diljit Dosanjh, Aastha Gill', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386843/MyMiniProjectsImages/hm7ilxde6ha3sfnyefxd.png', 'Namaste England (Original Motion Pictur', '2:58', 6),
('Be Mine', 'Shubh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386887/MyMiniProjectsImages/ml5mw7liso22wpy3ml1d.png', 'Be Mine', '2:28', 6),
('Schedule', 'Tegi Pannu, Manni Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386924/MyMiniProjectsImages/eosxutydzfxsvu3nd5g0.png', 'Schedule', '2:28', 6),
('Bijlee Bijlee', 'Harrdy Sandhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723386958/MyMiniProjectsImages/igzmjox1ukagfinwtvsk.png', 'Bijlee Bijlee', '2:48', 6),
('Peaches', 'Diljit Dosanjh', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387000/MyMiniProjectsImages/m8zdfg7aw41bakkendv0.png', 'Peaches', '3:09', 6),
('California Love', 'Cheema Y, Gur Sidhu', 'https://res.cloudinary.com/dnml2vs6t/image/upload/v1723387036/MyMiniProjectsImages/tqb9j0bpwrcsijvwyaqc.png', 'California Love', '4:22', 6);
