<?php
/*
session_start();

if (!isset($_SESSION["click"])) {
    $_SESSION["click"] = -1;
    $_SESSION["ficha2"] = "";
}

$srcImg2 = "";
$iguales = "";
$carta_anterior = "";
$ficha = $_POST["carta"];
$id = $_POST["id"];

$fichas = ["img/champiñon.jpg", "img/estrella.jpg", "img/flor_fuego.jpg", "img/moneda.jpg", "img/platano.jpg", "img/shell_blue.jpg",
    "img/estrella.jpg", "img/champiñon.jpg", "img/shell_blue.jpg", "img/platano.jpg", "img/moneda.jpg", "img/flor_fuego.jpg"];

$a = $fichas[$ficha];
if ($_SESSION["click"] == -1) {
    $_SESSION["click"] = $id;
    $_SESSION["ficha2"] = $ficha;
    $respuesta = '{"ficha":"' . $a . '",'
            . '"id":"' . $id . '",'
            . '"ficha2":"-1",'
            . '"id2":"-1"}';
    echo $respuesta;
} else {
   

    $iguales = "si";
    $carta_anterior = $_SESSION['ficha2'];

    if ($fichas[$ficha] == $fichas[$carta_anterior]) {
        $iguales = "no";
    }
    $srcImg2 = $fichas[$carta_anterior];
 


    $respuesta = '{"ficha":"' . $a . '",'
            . '"id":"' . $id . '",'
            . '"ficha2":"' .$srcImg2  . '",'
            . '"id2":"' . $_SESSION["click"] . '"}';
    
    $_SESSION["click"] = -1;
    echo $respuesta;
}*/


session_start();

if (isset($_SESSION["nfitxa"])) {
    
} else {
    $_SESSION["nfitxa"] = "-1";
}
$id = $_POST["id"];
$num = $_POST["num"];
$id_anterior = "";
$num_anterior = "";
$srcImg2 = "";
$iguales = "";

$fitxes = ["img/eevee.png", "img/espeon.png", "img/eevee.png", "img/vaporeon.png", "img/espeon.png", "img/umbreon.png",
    "img/jolteon.png", "img/vaporeon.png", "img/flareon.png", "img/jolteon.png", "img/espeon.png", "img/flareon.png"];


if ($_SESSION["nfitxa"] == "-1") {
    //primera vez clico

    $_SESSION["nfitxa"] = $id;
    $_SESSION["num_inicial"] = $num;
} else {
    //segunda vez clico. 
    //reseteo nfitxa;
    $id_anterior = $_SESSION["nfitxa"];
    $num_anterior = $_SESSION["num_inicial"];
    $iguales = "no";
    if ($fitxes[$num] == $fitxes[$num_anterior]) {
        $iguales = "si";
    }
    $srcImg2 = $fitxes[$num_anterior];
    $_SESSION["nfitxa"] = "-1";
}

$srcImg = $fitxes[$num];
$resposta = '{"src":"' . $srcImg . '","id":"' . $id . '",'
        . '"src2":"' . $srcImg2 . '","id2":"' . $id_anterior . '",'
        . '"iguales":"' . $iguales . '"}';

echo $resposta;

?>