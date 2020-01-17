DROP DATABASE IF EXISTS move_db;
create database move_db;

use move_db;

-- weight
DROP TABLE IF EXISTS weights;
CREATE TABLE weights (
	id INTEGER AUTO_INCREMENT,
	weight DECIMAL(4,1),
    height INT,
	createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(id)
);

-- activities
DROP TABLE IF EXISTS activities;
CREATE TABLE activities(
	id INTEGER AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    bodypart VARCHAR(255) NOT NULL,
	unit VARCHAR(255) NOT NULL,
	reps DECIMAL(10,2) NOT NULL,
	createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(id)
);

-- meals
DROP TABLE IF EXISTS meals;
CREATE TABLE meals(
	id INTEGER AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	description TEXT,
	calories INTEGER,
	createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO weights (weight, createdAt, updatedAt) VALUES (190, "2019-12-19 10:00:00", NOW());
INSERT INTO weights (weight, createdAt, updatedAt) VALUES (195, "2019-12-18 10:00:00","2019-12-29 10:00:00");
INSERT INTO weights (weight, createdAt, updatedAt) VALUES (197, "2019-12-17 10:00:00", "2019-12-29 10:00:00");
INSERT INTO weights (weight, createdAt, updatedAt) VALUES (200, "2019-12-16 10:00:00", "2019-12-29 10:00:00");
INSERT INTO weights (weight, createdAt, updatedAt) VALUES (203, "2019-12-15 10:00:00", "2019-12-29 10:00:00");
