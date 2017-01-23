<?php
    $alturaMapa = $_POST["altura"];
    $random = rand(0, intval($alturaMapa));
    
    $respuesta = '{"random":"' . $random . '"}';
    
    echo $respuesta;
?>