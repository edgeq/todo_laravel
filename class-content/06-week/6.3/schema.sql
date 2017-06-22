CREATE TABLE `books` (
  `id` INT AUTO_INCREMENT,
  `title` VARCHAR(128), 
  `author` VARCHAR(128),
  `genre_id` INT,
  `publisher_id` INT,
  `publication` DATE, #2017-06-04
  `pages` INT,
  `chapters` INT,
  `pictures` TINYINT,
  `fiction` TINYINT,
  `isbn` VARCHAR(13),
  `dewey` VARCHAR(7),
  PRIMARY KEY (`id`)
);

CREATE TABLE `genre` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(128),
  PRIMARY KEY (`id`)
)