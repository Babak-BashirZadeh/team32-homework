CREATE Table IF NOT EXISTS user2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    registration_date DATE NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user2_id INT NOT NULL,
    content TEXT NOT NULL,
    created_date DATE NOT NULL,
    updated_date DATE,
    relation_to_author VARCHAR(255),
    FOREIGN KEY (user2_id) REFERENCES user2(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user2_id INT NOT NULL,
    content TEXT NOT NULL,
    created_date DATE NOT NULL,
    updated_date DATE,
    relation_to_author VARCHAR(255),
    relation_to_post VARCHAR(255),
    relation_to_optional_parent_comment VARCHAR(255),
    FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES user2(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS reaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user2_id INT NOT NULL,
    comment_id INT,
    type ENUM('like', 'highfive', 'laugh', 'cry') NOT NULL,
    created_date DATE NOT NULL,
    updated_date DATE,
    relation_to_author VARCHAR(255),
    FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES user2(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS connection (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user2_id INT NOT NULL,
    related_user2_id INT NOT NULL,
    status ENUM('pending', 'accepted', 'blocked') NOT NULL,
    created_date DATE NOT NULL,
    updated_date DATE,
    relation_to_author VARCHAR(255),
    FOREIGN KEY (user2_id) REFERENCES user2(id) ON DELETE CASCADE,
    FOREIGN KEY (related_user2_id) REFERENCES user2(id) ON DELETE CASCADE
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT NOT NULL,
    created_date DATE NOT NULL,
    updated_date DATE,
    relation_to_author VARCHAR(255),
    connection_id INT NOT NULL,
    FOREIGN KEY (connection_id) REFERENCES connection(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES user2(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES user2(id) ON DELETE CASCADE
)ENGINE=InnoDB;

INSERT INTO user2 (name, password, email, registration_date) VALUES
('Alice Johnson', 'password123', 'alice@example.com', '2023-01-01'),
('Bob Smith', 'securepass', 'bob@example.com', '2023-02-01'),
('Charlie Brown', 'mypassword', 'charlie@example.com', '2023-03-01'),
('Diana Prince', 'wonderwoman', 'diana@example.com', '2023-04-01'),
('Eve Adams', 'evepass', 'eve@example.com', '2023-05-01');

INSERT INTO post (user2_id, content, created_date, updated_date, relation_to_author) VALUES
(1, 'This is Alices first post!', '2023-01-02', NULL, 'personal'),
(2, 'Bob shares his thoughts on technology.', '2023-02-05', NULL, 'professional'),
(3, 'Charlie posts about his favorite books.', '2023-03-10', '2023-03-15', 'hobby'),
(4, 'Diana shares her travel experiences.', '2023-04-12', NULL, 'travel'),
(5, 'Eve writes about her cooking adventures.', '2023-05-20', NULL, 'food');

INSERT INTO comment (post_id, user2_id, content, created_date, updated_date, relation_to_author, relation_to_post, relation_to_optional_parent_comment) VALUES
(1, 2, 'Great post, Alice!', '2023-01-03', NULL, 'friend', 'positive', NULL),
(2, 3, 'Interesting perspective, Bob.', '2023-02-06', NULL, 'colleague', 'neutral', NULL),
(3, 4, 'I love this book too, Charlie!', '2023-03-11', NULL, 'friend', 'positive', NULL),
(4, 5, 'Amazing travel story, Diana!', '2023-04-13', NULL, 'follower', 'positive', NULL),
(5, 1, 'Can\'t wait to try this recipe, Eve!', '2023-05-21', NULL, 'friend', 'positive', NULL);

INSERT INTO reaction (post_id, user2_id, comment_id, type, created_date, updated_date, relation_to_author) VALUES
(1, 2, 1, 'like', '2023-01-03', NULL, 'friend'),
(2, 3, NULL, 'highfive', '2023-02-06', NULL, 'colleague'),
(3, 4, 3, 'laugh', '2023-03-11', NULL, 'friend'),
(4, 5, NULL, 'like', '2023-04-13', NULL, 'follower'),
(5, 1, 5, 'cry', '2023-05-21', NULL, 'friend');

INSERT INTO message (sender_id, receiver_id, content, created_date, updated_date, relation_to_author, connection_id) VALUES
(1, 2, 'Hi Bob, how are you?', '2023-01-02', NULL, 'friend', 1),
(2, 3, 'Hey Charlie, let\'s catch up soon.', '2023-02-05', NULL, 'colleague', 2),
(3, 4, 'Hi Diana, loved your travel post!', '2023-03-10', NULL, 'friend', 3),
(4, 5, 'Eve, your cooking is amazing!', '2023-04-12', NULL, 'friend', 4),
(5, 1, 'Alice, let\'s collaborate on a project.', '2023-05-20', NULL, 'follower', 5);