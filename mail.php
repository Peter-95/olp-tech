<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$job = $_POST['job'];
$mail = $_POST['mail'];
$Massage = $_POST['Massage'];





$content="From: $name \n ";
$recipient = "peterpop195@gmail.com";
$mailheader = " $email \r\n 
name:    $name \r\n
phone:   $phone \r\n
Company: $company \r\n
Job:     $job \r\n 
Email:   $mail \r\n
Message: $Massage";
mail($recipient,  $content, $mailheader) or die("Error!");
exit();
?>