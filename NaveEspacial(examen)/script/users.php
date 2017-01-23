<?php
    session_start();
    
    $usuario = $_POST["nombreUsuario"];
    $puntuacion = $_POST["puntuacionUsuario"];
    
    $respuesta = '{"usuarios":[';
    
        if (!isset($_SESSION["usuarios"])) {
            $arrayUsu = array();
            $arrayUsu[$usuario] = $puntuacion;
            $_SESSION["usuarios"] = $arrayUsu;
        } else {
            $arrayUsu = $_SESSION["usuarios"];
            $arrayUsu[$usuario] = $puntuacion;
            $_SESSION["usuarios"] = $arrayUsu;

            foreach($arrayUsu as $arrayUsu=>$puntuacion){
                $respuesta.='{"nombre":"'.$arrayUsu.'", "puntuacion":"'.$puntuacion.'"},';
            }
             $respuesta.='{"":""}';
        }
    
    $respuesta.=']}';
    
    echo $respuesta;
?>