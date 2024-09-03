<?php
session_start();

// Проверяем, аутентифицирован ли пользователь
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    header('Location: local.php');
    exit();
}

// // Получаем данные из формы и сохраняем их в JSON файл
// $data = [
//     'about_title' => $_POST['about_title'],
//     'about_description1' => $_POST['about_description1'],
//     'about_description2' => $_POST['about_description2'],
// ];

// file_put_contents('data.json', json_encode($data));

// // Возвращаем пользователя на страницу администрирования
// header('Location: local.php');


$data = [
    'about_title' => $_POST['about_title'],
    'about_description1' => $_POST['about_description1'],
    'about_description2' => $_POST['about_description2'],
    'price_list_title' => $_POST['price_list_title'],
    'manicure_title' => $_POST['manicure_title'],
    'classic_manicure_name' => $_POST['classic_manicure_name'],
    'classic_manicure_price' => $_POST['classic_manicure_price'],
    'french_manicure_name' => $_POST['french_manicure_name'],
    'french_manicure_price' => $_POST['french_manicure_price'],
    'gel_manicure_name' => $_POST['gel_manicure_name'],
    'gel_manicure_price' => $_POST['gel_manicure_price'],
    'pedicure_title' => $_POST['pedicure_title'],
    'classic_pedicure_name' => $_POST['classic_pedicure_name'],
    'classic_pedicure_price' => $_POST['classic_pedicure_price'],
    'spa_pedicure_name' => $_POST['spa_pedicure_name'],
    'spa_pedicure_price' => $_POST['spa_pedicure_price'],
    'gel_pedicure_name' => $_POST['gel_pedicure_name'],
    'gel_pedicure_price' => $_POST['gel_pedicure_price'],
    'addons_title' => $_POST['addons_title'],
    'nail_art_name' => $_POST['nail_art_name'],
    'nail_art_price' => $_POST['nail_art_price'],
    'paraffin_treatment_name' => $_POST['paraffin_treatment_name'],
    'paraffin_treatment_price' => $_POST['paraffin_treatment_price'],
    'callus_removal_name' => $_POST['callus_removal_name'],
    'callus_removal_price' => $_POST['callus_removal_price'],
];

file_put_contents('data.json', json_encode($data));

// Возвращаем пользователя на страницу администрирования
header('Location: local.php');