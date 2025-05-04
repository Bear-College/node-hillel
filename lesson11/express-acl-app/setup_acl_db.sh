#!/bin/bash

# Налаштування підключення до MySQL
DB_HOST="localhost"
DB_USER="root"
DB_PASS="your_password"
DB_NAME="your_database"

# Підключення до бази даних і виконання SQL команд
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" <<EOF

-- Створити базу даних, якщо не існує
CREATE DATABASE IF NOT EXISTS $DB_NAME;
USE $DB_NAME;

-- Створення таблиць
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS permissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    action VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS access_control_list (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    resource_id INT,
    permission_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
);

-- Додавання тестових даних
INSERT INTO users (username) VALUES ('admin'), ('user1');

INSERT INTO resources (name) VALUES ('document1'), ('document2');

INSERT INTO permissions (action) VALUES ('read'), ('write'), ('delete');

INSERT INTO access_control_list (user_id, resource_id, permission_id) VALUES
(1, 1, 1), -- admin може читати document1
(1, 1, 2), -- admin може писати document1
(2, 1, 1); -- user1 може лише читати document1

EOF

echo "✅ База даних і таблиці створено, тестові дані додані."
