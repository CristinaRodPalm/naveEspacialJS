<?php
    $random = rand(intval(0), intval(2));
    
    switch($random){
        case 0: $ship = "ship01.png"; break;
        case 1: $ship = "ship02.png"; break;
        case 2: $ship = "ship03.png"; break;
    }
    
    $respuesta = '{"ship":"' . $ship . '"}';
    
    echo $respuesta;
?>