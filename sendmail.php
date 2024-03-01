<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

// from
$mail->setFrom('nastya.proskuryakova.98@mail.ru', 'Сногинова Анастасия');

//to
$mail->addAddress('dimaskaa29@yandex.ru');

//theme
$mail->Subject = 'Заявка с сайта RB Carbon';

//body 
$body = '<h2>Данные формы</h2>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$POST['email'].'</p>';
}

if(trim(!empty($_POST['number']))){
    $body.='<p><strong>Телефон:</strong> '.$POST['number'].'</p>';
}

$mail->Body = $body;

//Отправка

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
