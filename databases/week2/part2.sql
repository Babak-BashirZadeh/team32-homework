/* 
Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)
If you are done with the above tasks, you can continue with these advanced tasks:
Create an index on the name column of the student table.
Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
 */
SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begin` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` INT(10) UNSIGNED NOT NULL,
  FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO class (`name`, `begin`, `ends`, `created_at`) VALUES
('Class A', '2023-01-01 09:00:00', '2023-01-31 17:00:00', '2023-01-01 10:00:00'),
('Class B', '2023-02-01 09:00:00', '2023-02-28 17:00:00', '2023-02-01 10:00:00'),
('Class C', '2023-03-01 09:00:00', '2023-03-31 17:00:00', '2023-03-01 10:00:00');

INSERT INTO `student` (`name`, `email`, `phone`, `class_id`) VALUES
('Alice Johnson', 'alice.johnson@example.com', '123-456-7890', 1),
('Bob Smith', 'bob.smith@example.com', '234-567-8901', 1),
('Charlie Brown', 'charlie.brown@example.com', '345-678-9012', 2),
('Diana Prince', 'diana.prince@example.com', '456-789-0123', 2),
('Ethan Hunt', 'ethan.hunt@example.com', '567-890-1234', 3),
('Fiona Gallagher', 'fiona.gallagher@example.com', '678-901-2345', 3);

CREATE INDEX idx_student_name ON student (name);
ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';