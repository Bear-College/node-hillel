CREATE DATABASE IF NOT EXISTS your_database;
USE your_database;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL
);

CREATE TABLE documents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    owner_department VARCHAR(255) NOT NULL,
    classification VARCHAR(50) NOT NULL -- наприклад: 'public', 'confidential', 'secret'
);

-- Додати тестові дані
INSERT INTO users (username, department, country) VALUES
('adminUser', 'HR', 'Ukraine'),
('managerUser', 'Sales', 'USA'),
('basicUser', 'HR', 'Ukraine');

INSERT INTO documents (title, owner_department, classification) VALUES
('Employee Handbook', 'HR', 'public'),
('Sales Report Q1', 'Sales', 'confidential'),
('Top Secret Strategy', 'HR', 'secret');
