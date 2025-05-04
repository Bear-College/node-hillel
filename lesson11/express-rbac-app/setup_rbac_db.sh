CREATE DATABASE IF NOT EXISTS your_database;
USE your_database;

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Додавання тестових ролей і користувачів
INSERT INTO roles (name) VALUES ('admin'), ('manager'), ('user');

INSERT INTO users (username, role_id) VALUES
('adminUser', 1),
('managerUser', 2),
('basicUser', 3);
