<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $product_id = $_POST['product_id'];
    $customer_name = $_POST['customer_name'];
    $payment_method = $_POST['payment_method'];

    $stmt = $conn->prepare("INSERT INTO transactions (product_id, customer_name, payment_method) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $product_id, $customer_name, $payment_method);

    if ($stmt->execute()) {
        echo "<script>
            alert('Order Successful! Thank you for shopping with Luxe Wear.');
            window.location.href = 'index.php';
        </script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>