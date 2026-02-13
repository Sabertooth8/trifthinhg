<?php
include 'db.php';

// Fetch products
$products = $conn->query("SELECT * FROM products ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Clothing Store</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container fade-in">
        <nav>
            <div class="logo">LUXE WEAR</div>
            <div class="nav-links">
                <a href="#">Home</a>
                <a href="#shop">Shop</a>
                <a href="login.php">Owner Login</a>
            </div>
            <a href="#shop" class="btn btn-primary">Start Shopping</a>
        </nav>

        <header style="text-align: center; margin: 4rem 0;">
            <h1 style="font-size: 4rem; margin-bottom: 1rem; line-height: 1.1;">Elevate Your Style.</h1>
            <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
                Discover our curated collection of premium t-shirts, jackets, and hoodies designed for the modern
                lifestyle.
            </p>
        </header>

        <section id="shop">
            <h2 style="margin-bottom: 2rem;">Featured Collections</h2>
            <div class="product-grid">
                <?php if ($products->num_rows > 0): ?>
                    <?php while ($row = $products->fetch_assoc()): ?>
                        <div class="product-card">
                            <span class="product-tag">
                                <?php echo $row['category']; ?>
                            </span>
                            <img src="<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>" class="product-image"
                                onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'">
                            <h3 class="product-title">
                                <?php echo $row['name']; ?>
                            </h3>
                            <div class="product-price">Rp
                                <?php echo number_format($row['price'], 0, ',', '.'); ?>
                            </div>
                            <button
                                onclick="openCheckout(<?php echo $row['id']; ?>, '<?php echo $row['name']; ?>', <?php echo $row['price']; ?>)"
                                class="btn btn-primary" style="width: 100%;">Add to Cart</button>
                        </div>
                    <?php endwhile; ?>
                <?php else: ?>
                    <!-- Fallback items if no products in DB -->
                    <div class="product-card">
                        <span class="product-tag">Kaos</span>
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60"
                            class="product-image">
                        <h3 class="product-title">Premium Cotton T-Shirt</h3>
                        <div class="product-price">Rp 150.000</div>
                        <button onclick="alert('Please add products via Admin Dashboard')" class="btn btn-primary"
                            style="width: 100%;">Buy Now</button>
                    </div>
                    <div class="product-card">
                        <span class="product-tag">Jaket</span>
                        <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=60"
                            class="product-image">
                        <h3 class="product-title">Urban Bomber Jacket</h3>
                        <div class="product-price">Rp 450.000</div>
                        <button onclick="alert('Please add products via Admin Dashboard')" class="btn btn-primary"
                            style="width: 100%;">Buy Now</button>
                    </div>
                    <div class="product-card">
                        <span class="product-tag">Hoodie</span>
                        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=60"
                            class="product-image">
                        <h3 class="product-title">Essential Oversized Hoodie</h3>
                        <div class="product-price">Rp 350.000</div>
                        <button onclick="alert('Please add products via Admin Dashboard')" class="btn btn-primary"
                            style="width: 100%;">Buy Now</button>
                    </div>
                <?php endif; ?>
            </div>
        </section>
    </div>

    <!-- Checkout Modal -->
    <div id="checkoutModal" class="modal-overlay">
        <div class="modal">
            <h2 id="modalTitle">Checkout</h2>
            <p id="modalPrice" style="color: var(--primary); font-size: 1.5rem; margin: 1rem 0; font-weight: 700;"></p>

            <form action="process_checkout.php" method="POST">
                <input type="hidden" name="product_id" id="pid">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" name="customer_name" required placeholder="John Doe">
                </div>

                <label>Payment Method</label>
                <div class="payment-grid">
                    <div class="payment-option" onclick="selectPayment('E-Wallet', this)">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📱</div>
                        <strong>E-Wallet</strong>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Dana, OVO, GoPay</div>
                    </div>
                    <div class="payment-option" onclick="selectPayment('Bank Transfer', this)">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏦</div>
                        <strong>Bank Transfer</strong>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">BCA, Mandiri, BNI</div>
                    </div>
                </div>
                <input type="hidden" name="payment_method" id="selectedPayment" required>

                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                    <button type="button" onclick="closeCheckout()" class="btn"
                        style="background: #334155; color: white; flex: 1;">Cancel</button>
                    <button type="submit" class="btn btn-primary" style="flex: 2;">Confirm Order</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        function openCheckout(id, name, price) {
            document.getElementById('checkoutModal').style.display = 'flex';
            document.getElementById('modalTitle').innerText = 'Checkout: ' + name;
            document.getElementById('modalPrice').innerText = 'Rp ' + price.toLocaleString('id-ID');
            document.getElementById('pid').value = id;
        }

        function closeCheckout() {
            document.getElementById('checkoutModal').style.display = 'none';
        }

        function selectPayment(method, el) {
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('selectedPayment').value = method;
        }
    </script>
</body>

</html>