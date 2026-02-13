<?php
include 'db.php';
session_start();

$error = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $result = $conn->query("SELECT * FROM users WHERE username = '$username'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['admin_logged_in'] = true;
            header("Location: admin.php");
            exit();
        } else {
            $error = "Incorrect password.";
        }
    } else {
        $error = "User not found.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Owner Login - Luxe Wear</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container fade-in">
        <div class="login-card">
            <h2 style="text-align: center; margin-bottom: 2rem;">Admin Access</h2>

            <?php if ($error): ?>
                <div
                    style="background: rgba(244, 63, 94, 0.2); border: 1px solid var(--accent); padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; color: #fda4af;">
                    <?php echo $error; ?>
                </div>
            <?php endif; ?>

            <form method="POST">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" required placeholder="admin">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Login to
                    Dashboard</button>
            </form>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="index.php" style="color: var(--text-muted); font-size: 0.9rem; text-decoration: none;">← Back
                    to Store</a>
            </div>
        </div>
    </div>
</body>

</html>