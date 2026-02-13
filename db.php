<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'jualan_db';

$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if not exists
$conn->query("CREATE DATABASE IF NOT EXISTS $db");
$conn->select_db($db);

// Create tables
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);";
$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    category ENUM('Kaos', 'Jaket', 'Hoodie') NOT NULL,
    image VARCHAR(255) DEFAULT 'placeholder.jpg',
    description TEXT
);";
$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    customer_name VARCHAR(100),
    payment_method VARCHAR(50),
    status ENUM('pending', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);";
$conn->query($sql);

// Seed admin user if not exists
$checkAdmin = $conn->query("SELECT * FROM users WHERE username = 'admin'");
if ($checkAdmin->num_rows == 0) {
    $hashed_password = password_hash('admin123', PASSWORD_DEFAULT);
    $conn->query("INSERT INTO users (username, password) VALUES ('admin', '$hashed_password')");
}

// Seed initial products if empty
$checkProducts = $conn->query("SELECT * FROM products");
if ($checkProducts->num_rows == 0) {
    $conn->query("INSERT INTO products (name, price, category, image, description) VALUES 
    ('Classic White Tee', 150000, 'Kaos', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', '100% Premium Cotton, breathable and durable.'),
    ('Vintage Denim Jacket', 450000, 'Jaket', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80', 'Classic urban style with premium denim fabric.'),
    ('Midnight Black Hoodie', 350000, 'Hoodie', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80', 'Soft fleece lining for ultimate comfort.')");
}
?>