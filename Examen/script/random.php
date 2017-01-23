<?php
    $random = rand(intval(1000), intval(3000));
    
    $respuesta = '{"random":"' . $random . '"}';
    
    echo $respuesta;
?>