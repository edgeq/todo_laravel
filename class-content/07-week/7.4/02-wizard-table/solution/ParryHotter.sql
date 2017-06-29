CREATE DATABASE `ParryHotter`;

USE `ParryHotter`;

CREATE TABLE `wizards` (
	`id`        INT AUTO_INCREMENT,
	`name`      VARCHAR(255),
	`hitpoints` INT,
	`powers`    VARCHAR(255),
	PRIMARY KEY (`id`)
);

INSERT INTO `wizards`
(`name`, `hitpoints`, `powers`) VALUES
	('Harry Dresdent', 900, 'Magical Bum Rush');

INSERT INTO `wizards`
(`name`, `hitpoints`, `powers`) VALUES
	('Voldemert', 450, 'Avedecadabra');

INSERT INTO `wizards`
(`name`, `hitpoints`, `powers`) VALUES
	('Gandalf', 90202, 'Bong');

INSERT INTO `wizards`
(`name`, `hitpoints`, `powers`) VALUES
	('Bob', 10^32, 'Code');

INSERT INTO `wizards`
(`name`, `hitpoints`, `powers`) VALUES
	('Simmy Gimmy', 10, 'Staff Stalking');