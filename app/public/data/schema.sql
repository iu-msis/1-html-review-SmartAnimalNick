-- dbserver.cxjjcrpktxkz.us-east-2.rds.amazonaws.com
-- CREATE USER 'msis-reader'@'%' IDENTIFIED BY 'msisreadonly';

CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS students;
CREATE TABLE students (
	id int PRIMARY KEY AUTO_INCREMENT ,
    username varchar(24) UNIQUE NOT NULL,
    name varchar(48)
);

INSERT INTO students (id, username, name) VALUES 
(1, 'tomgreg', 'Tom Gregory'),
(2, 'beth1', 'Beth Barnhart'),
(3, 'bipin', 'Prof. Prabhakar');

DROP TABLE IF EXISTS books;

CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    booktitle varchar(48) UNIQUE NOT NULL,
    authorname varchar(48),
    pubyear int,
    pubname varchar(48),
    pgcount int,
    msrp varchar(24)
);

INSERT INTO books (id, booktitle, authorname, pubyear, pubname, pgcount, msrp) VALUES 
(1, 'Lets Go Rock Collecting', 'Roma Gans', 2018, 'Kids Co.', 13, '$59.49' ),
(2, 'Everything Rocks and Minerals', 'Steve Tomecek', 1998, 'National Geographic', 28, '$4.99' ),
(3, 'If You Find a Rock', 'Peggy Christian', 2010, 'Barb Lember', 17, '$18.99' ),
(4, 'Rocks, Fossils, & Arrowheads', 'Laura Evert', 2020, 'Ages 6 and Up', 64, '$9.98' ),
(5, 'A Rock is Lively', 'Diana Hutts Aston', 1921, 'NY Publishing', 22, '$2.99' );