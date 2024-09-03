<?php
session_start();
$admin_password = '12345'; // Задайте здесь свой пароль

// Проверка отправки формы
if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['authenticated'] = true;
    } else {
        echo "Неверный пароль!";
    }
}

// Если пользователь аутентифицирован, показываем панель администрирования
if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true):
    $data = json_decode(file_get_contents('data.json'), true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
</head>
<body>
    <form action="save.php" method="post">
        <label for="about_title">About Title:</label>
        <input type="text" id="about_title" name="about_title" value="<?php echo $data['about_title']; ?>"><br><br>

        <label for="about_description1">About Description 1:</label>
        <textarea id="about_description1" name="about_description1"><?php echo $data['about_description1']; ?></textarea><br><br>

        <label for="about_description2">About Description 2:</label>
        <textarea id="about_description2" name="about_description2"><?php echo $data['about_description2']; ?></textarea><br><br>
        
        <label for="price_list_title">Price List Title:</label>
        <input type="text" id="price_list_title" name="price_list_title" value="<?php echo $data['price_list_title']; ?>"><br><br>

        <label for="manicure_title">Manicure Title:</label>
        <input type="text" id="manicure_title" name="manicure_title" value="<?php echo $data['manicure_title']; ?>"><br><br>

        <label for="classic_manicure_name">Classic Manicure Name:</label>
        <input type="text" id="classic_manicure_name" name="classic_manicure_name" value="<?php echo $data['classic_manicure_name']; ?>"><br><br>
        <label for="classic_manicure_price">Classic Manicure Price:</label>
        <input type="text" id="classic_manicure_price" name="classic_manicure_price" value="<?php echo $data['classic_manicure_price']; ?>"><br><br>

        <label for="french_manicure_name">French Manicure Name:</label>
        <input type="text" id="french_manicure_name" name="french_manicure_name" value="<?php echo $data['french_manicure_name']; ?>"><br><br>
        <label for="french_manicure_price">French Manicure Price:</label>
        <input type="text" id="french_manicure_price" name="french_manicure_price" value="<?php echo $data['french_manicure_price']; ?>"><br><br>

        <label for="gel_manicure_name">Gel Manicure Name:</label>
        <input type="text" id="gel_manicure_name" name="gel_manicure_name" value="<?php echo $data['gel_manicure_name']; ?>"><br><br>
        <label for="gel_manicure_price">Gel Manicure Price:</label>
        <input type="text" id="gel_manicure_price" name="gel_manicure_price" value="<?php echo $data['gel_manicure_price']; ?>"><br><br>

        <label for="pedicure_title">Pedicure Title:</label>
        <input type="text" id="pedicure_title" name="pedicure_title" value="<?php echo $data['pedicure_title']; ?>"><br><br>

        <label for="classic_pedicure_name">Classic Pedicure Name:</label>
        <input type="text" id="classic_pedicure_name" name="classic_pedicure_name" value="<?php echo $data['classic_pedicure_name']; ?>"><br><br>
        <label for="classic_pedicure_price">Classic Pedicure Price:</label>
        <input type="text" id="classic_pedicure_price" name="classic_pedicure_price" value="<?php echo $data['classic_pedicure_price']; ?>"><br><br>

        <label for="spa_pedicure_name">Spa Pedicure Name:</label>
        <input type="text" id="spa_pedicure_name" name="spa_pedicure_name" value="<?php echo $data['spa_pedicure_name']; ?>"><br><br>
        <label for="spa_pedicure_price">Spa Pedicure Price:</label>
        <input type="text" id="spa_pedicure_price" name="spa_pedicure_price" value="<?php echo $data['spa_pedicure_price']; ?>"><br><br>

        <label for="gel_pedicure_name">Gel Pedicure Name:</label>
        <input type="text" id="gel_pedicure_name" name="gel_pedicure_name" value="<?php echo $data['gel_pedicure_name']; ?>"><br><br>
        <label for="gel_pedicure_price">Gel Pedicure Price:</label>
        <input type="text" id="gel_pedicure_price" name="gel_pedicure_price" value="<?php echo $data['gel_pedicure_price']; ?>"><br><br>

        <label for="addons_title">Add-Ons Title:</label>
        <input type="text" id="addons_title" name="addons_title" value="<?php echo $data['addons_title']; ?>"><br><br>

        <label for="nail_art_name">Nail Art Name:</label>
        <input type="text" id="nail_art_name" name="nail_art_name" value="<?php echo $data['nail_art_name']; ?>"><br><br>
        <label for="nail_art_price">Nail Art Price:</label>
        <input type="text" id="nail_art_price" name="nail_art_price" value="<?php echo $data['nail_art_price']; ?>"><br><br>

        <label for="paraffin_treatment_name">Paraffin Treatment Name:</label>
        <input type="text" id="paraffin_treatment_name" name="paraffin_treatment_name" value="<?php echo $data['paraffin_treatment_name']; ?>"><br><br>
        <label for="paraffin_treatment_price">Paraffin Treatment Price:</label>
        <input type="text" id="paraffin_treatment_price" name="paraffin_treatment_price" value="<?php echo $data['paraffin_treatment_price']; ?>"><br><br>

        <label for="callus_removal_name">Callus Removal Name:</label>
        <input type="text" id="callus_removal_name" name="callus_removal_name" value="<?php echo $data['callus_removal_name']; ?>"><br><br>
        <label for="callus_removal_price">Callus Removal Price:</label>
        <input type="text" id="callus_removal_price" name="callus_removal_price" value="<?php echo $data['callus_removal_price']; ?>"><br><br>

        <button type="submit">Сохранить</button>
    </form>
</body>
</html>
<?php else: ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="" method="post">
        <label for="password">Пароль:</label>
        <input type="password" id="password" name="password">
        <button type="submit">Войти</button>
    </form>
</body>
</html>
<?php endif; ?>
