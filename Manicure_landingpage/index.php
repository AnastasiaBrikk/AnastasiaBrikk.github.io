<?php
// Загружаем тексты из JSON файла
$data = json_decode(file_get_contents('data.json'), true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <div class="about-section">
        <div class="image-container"><img src="../images/master-photo.jpg" alt="Master Anna" class="master-photo"></div>
        <div class="content">
            <h2 class="about-title"><?php echo $data['about_title']; ?></h2>
            <p class="about-description"><?php echo $data['about_description1']; ?></p>
            <p class="about-description"><?php echo $data['about_description2']; ?></p>
        </div>
    </div>
    <div class="section" id="price-section">
        <div class="price-list">
            <h1 class="price-list-title"><?php echo $data['price_list_title']; ?></h1>
            <div class="price-list-container">
                <div class="price-category">
                    <h2><?php echo $data['manicure_title']; ?></h2>
                    <ul>
                        <li><span class="service-name"><?php echo $data['classic_manicure_name']; ?></span><span class="service-price"><?php echo $data['classic_manicure_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['french_manicure_name']; ?></span><span class="service-price"><?php echo $data['french_manicure_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['gel_manicure_name']; ?></span><span class="service-price"><?php echo $data['gel_manicure_price']; ?></span></li>
                    </ul>
                </div>
                <div class="price-category">
                    <h2><?php echo $data['pedicure_title']; ?></h2>
                    <ul>
                        <li><span class="service-name"><?php echo $data['classic_pedicure_name']; ?></span><span class="service-price"><?php echo $data['classic_pedicure_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['spa_pedicure_name']; ?></span><span class="service-price"><?php echo $data['spa_pedicure_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['gel_pedicure_name']; ?></span><span class="service-price"><?php echo $data['gel_pedicure_price']; ?></span></li>
                    </ul>
                </div>
                <div class="price-category">
                    <h2><?php echo $data['addons_title']; ?></h2>
                    <ul>
                        <li><span class="service-name"><?php echo $data['nail_art_name']; ?></span><span class="service-price"><?php echo $data['nail_art_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['paraffin_treatment_name']; ?></span><span class="service-price"><?php echo $data['paraffin_treatment_price']; ?></span></li>
                        <li><span class="service-name"><?php echo $data['callus_removal_name']; ?></span><span class="service-price"><?php echo $data['callus_removal_price']; ?></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
