<?php
if(isset($_POST['submit'])){
    $maile =  $_POST['mail'];
    $text = $_POST['text'];

    $mailTO = 'testter123321@hotmail.com';
    $header ="From: ".$maile;
    $txt = "you just recived message: \n\n".$text;

    mail($mailTO,$header,$txt);
    header("Location: idnex.html?mailsend");
} 
?>