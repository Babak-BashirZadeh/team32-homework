CREATE TABLE IF NOT EXISTS Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(15),
    contact_name VARCHAR(100),
    contact_email VARCHAR(100)
);
CREATE TABLE IF NOT EXISTS Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id),
    stars INT CHECK (stars >= 1 AND stars <= 5),
    created_date DATE NOT NULL
);

-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
('Italian Dinner', 'Enjoy a delicious Italian meal with homemade pasta.', 'Rome', '2023-10-01 19:00:00', 10, 25.00, '2023-09-01'),
('Sushi Night', 'Experience authentic sushi made by a professional chef.', 'Tokyo', '2023-10-02 18:30:00', 8, 40.00, '2023-09-02'),
('BBQ Party', 'Join us for a fun BBQ party with grilled meats and sides.', 'Austin', '2023-10-03 17:00:00', 15, 30.00, '2023-09-03'),
('Snack', 'Join us for a fun Snack party with drinks and sides.', 'Copenhagen', '2023-11-03 18:00:00', 10, 45.00, '2024-09-03');
-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title = 'Italian Dinner updated', description = 'Enjoy updated italian meal', location = 'Rome updated' WHERE id = 1;

-- Delete rows in Reservation and Review that reference the meal
DELETE FROM Reservation WHERE meal_id = 1;
DELETE FROM Review WHERE meal_id = 1;
-- Now delete the meal
DELETE FROM Meal WHERE id = 1;



-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO Reservation (number_of_guests, Meal_id, Created_date, contact_phonenumber, contact_name, contact_email) VALUES
(2, 1, '2023-09-15', '123-456-7890', 'John Doe', 'john@example.com'),
(4, 2, '2023-09-16', '987-654-3210', 'Jane Smith', 'jane@example.com'),
(3, 3, '2023-09-17', '555-555-5555', 'Alice Johnson', 'alice@example.com'),
(5, 4, '2023-09-18', '444-444-4444', 'Bob Brown', 'babak@gmail.com');
-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET contact_name = "Jane Smith updated" WHERE contact_email LIKE "%jane%";
-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 2;

-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date) VALUES
('Amazing Italian!', 'The pasta was incredible and the atmosphere was perfect.', 1, 5, '2023-09-20'),
('Best Sushi Ever', 'The sushi was fresh and beautifully presented.', 2, 4, '2023-09-21'),
('Great BBQ', 'Had a fantastic time at the BBQ, the food was delicious!', 3, 5, '2023-09-22'),
('Snack was good', 'The snacks were tasty and the drinks were refreshing.', 4, 3, '2023-09-23');
-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET title = "Best Sushi Ever Updated", description = "The sushi was fresh and beautifully presented Updated" WHERE id = 2;
--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 2;
-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
('French Cuisine', 'Experience the elegance of French cooking.', 'Paris', '2023-10-05 20:00:00', 12, 50.00, '2023-09-05'),
('Indian Feast', 'Enjoy a variety of Indian dishes with rich flavors.', 'Delhi', '2023-10-06 19:30:00', 20, 35.00, '2023-09-06'),
('Mexican Fiesta', 'Join us for a vibrant Mexican meal with tacos and more.', 'Mexico City', '2023-10-07 18:00:00', 25, 28.00, '2023-09-07'),
('Chinese Banquet', 'Savor a traditional Chinese banquet with multiple courses.', 'Beijing', '2023-10-08 17:30:00', 30, 45.00, '2023-09-08');

-- Insert sample reservations
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(3, 1, '2023-09-20', '555-123-4567', 'Alice Brown', 'alice.brown@example.com'),
(2, 2, '2023-09-21', '555-987-6543', 'David Smith', 'david.smith@example.com'),
(4, 3, '2023-09-22', '555-456-7890', 'Emma Johnson', 'emma.johnson@example.com'),
(5, 4, '2023-09-23', '555-321-6548', 'Michael Green', 'michael.green@example.com');

INSERT INTO review (title, description, meal_id, stars, created_date) VALUES
('Delicious French!', 'The French cuisine was exquisite and the service was top-notch.', 1, 5, '2023-09-28'),
('Spicy Indian!', 'The Indian feast was full of flavors and spices.', 2, 4, '2023-09-29'),
('Fun Mexican!', 'The Mexican fiesta was lively and the food was fantastic.', 3, 5, '2023-09-30'),
('Great Chinese!', 'The Chinese banquet was a delightful experience.', 4, 4, '2023-10-01');

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 90;
-- Get meals that still has available reservations
SELECT * FROM meal WHERE max_reservations > (SELECT COUNT(*) FROM reservation WHERE meal_id = meal.id);
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%grød%';
-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2023-09-01' AND '2023-09-30';
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;
-- Get the meals that have good reviews
SELECT * FROM meal WHERE id IN (SELECT meal_id FROM review WHERE stars >= 4);
-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 1 ORDER BY created_date DESC;
-- Sort all meals by average number of stars in the reviews
SELECT Meal.*, 
       (SELECT AVG(stars) 
        FROM Review 
        WHERE Review.meal_id = Meal.id) AS average_stars
FROM Meal
ORDER BY average_stars DESC;