<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";

if($_POST["form"] == NULL){
  session_start();
}

$server_mail = "TopGoTracker@yandex.ru";


$client_name = trim($_POST["name"]);
$mailTo = trim($_POST["mailTo"]);
$c = true;


function adopt($text)
{
    return "=?UTF-8?B?" . Base64_encode($text) . "?=";
}


$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = "smtp.yandex.ru";
$mail->SMTPAuth = true;
$mail->Username = $server_mail;//TopGoTracker@yandex.ru
$mail->Password = "avccoprhwajvcnek";//avccoprhwajvcnek
$mail->SMTPSecure = "ssl";
$mail->Port = 465;

$mail->setFrom($server_mail);
$mail->addAddress($mailTo);
$mail->isHTML(true);

if($_POST["form"]["from"] == "index"){
    $client_phone  = trim($_POST["number"]);

    $mail->Subject = adopt("заказ звонка");
    $mail->Body = "<b>".$client_name."</b> заказал(а) звонок<br>номер: ".$client_phone;

} else if ($_POST["form"]["from"] == "partner"){
  $client_phone  = trim($_POST["number"]);

    $mail->Subject = adopt("заказ звонка от партнера");
    $mail->Body = "Партнер <b>".$client_name."</b> заказал(а) звонок<br>номер: ".$client_phone;

} else if ($_POST["form"]["from"] == "client"){
  $client_phone  = trim($_POST["number"]);

    $mail->Subject = adopt("заказ звонка от клиента");
    $mail->Body = "Клиент <b>".$client_name."</b> заказал(а) звонок<br>номер: ".$client_phone;

}


$mail->send();
http_response_code(204);

