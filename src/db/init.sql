USE ivovkodav;

CREATE TABLE IF NOT EXISTS `comment` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT,
    `company` TEXT,
    `position` TEXT,
    `content` TEXT NOT NULL
);

INSERT INTO `comment` (name, company, position, content) VALUES ("Ihor Vovkodav", "ABC", "Software Developer", "TEST");