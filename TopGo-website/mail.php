<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";

if($_SESSION == NULL){
    session_start();
  }
$server_mail = "TopGoTracker@yandex.ru";

$c = true;


function adopt($text)
{
    return "=?UTF-8?B?" . Base64_encode($text) . "?=";
}

if($_SESSION["from"] == "index"){
    
    $client_email  = trim($_POST["email"]);
    $client_comment = trim($_POST["comment"]);
} else if ($_SESSION["from"] == "partner"){

    $client_phone = trim($_POST["phone"]);
    $client_inn = trim($_POST["inn"]);
    $client_parkName = trim($_POST["parkName"]);
    $client_curierAmount = trim($_POST["curierAmount"]);
    $client_comment = trim($_POST["comment"]);

} else if($_SESSION["from"] == "client"){
    
    $client_email  = trim($_POST["email"]);
    $client_phone = trim($_POST["phone"]);
    $client_company = trim($_POST["companyName"]);
    $client_product = trim($_POST["productType"]);
    $client_delivery_per_day = trim($_POST["deliveryPerDay"]);
    $client_inn = trim($_POST["inn"]);
    $client_citiesAmount = trim($_POST["citiesAmount"]);
    $client_comment = trim($_POST["comment"]);
}

$headers = "MIME-Version: 1.0".PHP_EOL.
    "Content-Type: text/html; charset=utf-8".PHP_EOL.
    "From: ".$server_mail.PHP_EOL.
    "Reply-To: ".$server_mail."".PHP_EOL;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = "smtp.yandex.ru";
$mail->SMTPAuth = true;
$mail->Username = $server_mail;//TopGoTracker@yandex.ru
$mail->Password = "avccoprhwajvcnek";//avccoprhwajvcnek
$mail->SMTPSecure = "ssl";
$mail->Port = 465;


$client_name = trim($_POST["name"]);
$mailTo = trim($_POST["mailTo"]);


$mail->setFrom($server_mail);
$mail->addAddress($mailTo);
$mail->isHTML(true);

if($_SESSION["from"] == "index"){

    $mail->Subject = adopt("сообщение с сайта");
    $mail->Body = "<b>тестовое сообщение с сайта</b><br>Имя: ".$client_name."<br>Почта: ".$client_email."<br>сообщение от: ".$client_comment;

} else if ($_SESSION["from"] == "partner"){

    $mail->Subject = adopt("сообщение от Партнера");
    $mail->Body = "<br>Имя партнера: ".$client_name."<br>Телефон: ".$client_phone."<br>ИНН: ".$client_inn."<br>Штат курьеров: ".$client_curierAmount."<br>Название парка: ".$client_parkName."<br>Комментарий: ".$client_comment;

} else if ($_SESSION["from"] == "client"){

    $mail->Subject = adopt("сообщение от Клиента");
    $mail->Body = "Имя клиента: ".$client_name."<br>Телефон: ".$client_phone."<br>Почта: ".$client_email."<br>Название компании: ".$client_company."<br>Планиеруется доставлять: ".$client_product."<br>Доставок в день: ".$client_delivery_per_day."<br>ИНН: ".$client_inn."<br>Количество городов присутствия: ".$client_citiesAmount."<br>Комментарий: ".$client_comment;

}


$mail->send();

http_response_code(204);
