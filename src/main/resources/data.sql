



insert into Sponsor(name,industry) values
('TechCorp','Technology'),
('Glamour Inc.','Fashion'),
('SoundWave Productions','Music Production'),
('EcoPlanet','Environmental Conservation');


insert into Event(name,date) values
('TechCon','2023-12-15'),
('Fashion Fest','2023-11-05'),
('MusicFest','2024-01-25'),
('EcoAwareness Conclave','2023-11-10');


insert into event_sponsor(sponsorId,eventId) values (1,1);
insert into event_sponsor(sponsorId,eventId) values (1,2);
insert into event_sponsor(sponsorId,eventId) values (2,2);
insert into event_sponsor(sponsorId,eventId) values (3,3);
insert into event_sponsor(sponsorId,eventId) values (3,4);
insert into event_sponsor(sponsorId,eventId) values (4,4);
