<?php
include 'db.php';
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

// Handle Add Product
if (isset($_POST['add_product'])) {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $category = $_POST['category'];
    $desc = $_POST['description'];
    $img = $_POST['image_url'] ?: 'placeholder.jpg';

    $stmt = $conn->prepare("INSERT INTO products (name, price, category, description, image) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sisss", $name, $price, $category, $desc, $img);
    $stmt->execute();
}

// Handle Delete Product
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $conn->query("DELETE FROM products WHERE id = $id");
}

$products = $conn->query("SELECT * FROM products ORDER BY id DESC");
$transactions = $conn->query("SELECT t.*, p.name as product_name FROM transactions t JOIN products p ON t.product_id = p.id ORDER BY t.created_at DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Luxe Wear</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container fade-in">
        <nav>
            <div class="logo">LUXE DASHBOARD</div>
            <div class="nav-links">
                <a href="#products">Manage Products</a>
                <a href="#orders">View Orders</a>
            </div>
            <a href="logout.php" class="btn btn-danger">Logout</a>
        </nav>

        <section id="add-product" style="margin-bottom: 4rem;">
            <div class="product-card" style="max-width: 800px; margin: 0 auto; padding: 2.5rem;">
                <h2 style="margin-bottom: 2rem;">Add New Product</h2>
                <form method="POST">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <div class="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" required placeholder="Ex: Premium Hoodie Black">
                        </div>
                        <div class="form-group">
                            <label>Price (Rp)</label>
                            <input type="number" name="price" required placeholder="150000">
                        </div>
                        <div class="form-group">
                            <label>Category</label>
                            <select name="category" required>
                                <option value="Kaos">Kaos</option>
                                <option value="Jaket">Jaket</option>
                                <option value="Hoodie">Hoodie</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Image URL (from Unsplash or similar)</label>
                            <input type="text" name="image_url" placeholder="https://...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" rows="3" placeholder="Describe your product..."></textarea>
                    </div>
                    <button type="submit" name="add_product" class="btn btn-primary" style="width: 100%;">Upload Product</button>
                </form>
            </div>
        </section>

        <section id="products" style="margin-bottom: 4rem;">
            <h2>Existing Inventory</h2>
            <div class="product-card" style="padding: 0; overflow: hidden; margin-top: 1.5rem;">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while($row = $products->fetch_assoc()): ?>
                            <tr>
                                <td><img src="<?php echo $row['image']; ?>" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;"></td>
                                <td><?php echo $row['name']; ?></td>
                                <td><?php echo $row['category']; ?></td>
                                <td>Rp <?php echo number_format($row['price'], 0, ',', '.'); ?></td>
                                <td>
                                    <a href="?delete=<?php echo $row['id']; ?>" class="btn btn-danger" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="return confirm('Are you sure?')">Delete</a>
                                </td>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </section>

        <section id="orders">
            <h2>Recent Transactions</h2>
            <div class="product-card" style="padding: 0; overflow: hidden; margin-top: 1.5rem;">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while($row = $transactions->fetch_assoc()): ?>
                            <tr>
                                <td>#<?php echo $row['id']; ?></td>
                                <td><?php echo $row['customer_name']; ?></td>
                                <td><?php echo $row['product_name']; ?></td>
                                <td><?php echo $row['payment_method']; ?></td>
                                <td>
                                    <span style="background: rgba(34, 197, 94, 0.2); color: #4ade80; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.8rem;">
                                        <?php echo $row['status']; ?>
                                    </span>
                                </td>
                                <td><?php echo date('d M, H:i', strtotime($row['created_at'])); ?></td>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</body>
</html>
