<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$order_type = $_POST['order_type'];
$address = $_POST['address'];
$order = $_POST['order'];
$feedback = $_POST['feedback'];

// the message
$msg = "Name: $name\n
        Phone: $phone\n
        Order Type: $order_type\n
        Address: $address\n
        Order: $order\n
        Feedbak: $feedback";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("newhopeseafood@newhopeseafood.com","Order",$msg);
?>
