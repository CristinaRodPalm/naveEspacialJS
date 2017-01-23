$(document).ready(iniciar);

var carta = $("<img src = 'img/carta.jpg'/>");
var cartaCrear;

function iniciar(){
    $('#btn_empezar').click(crearCartas);
    $('#tablero > div > img').click(checkCarta);
}

function sendAjax(){
    var idImg = $(this).attr('title');
    var idDiv = $(this).parent().attr('id');
    $.ajax({
        type:"POST",
        url:"index.php",
        dataType:"json",
        data:{"carta": idImg, "id":idDiv },
        success: function(respuesta){ 
                    var a = respuesta.ficha;
                    var b = respuesta.id;
                    var c = respuesta.id2;
                    
                    var i = $('<img />');
                    i.attr('src',a);
                    $("#"+b+" > img").remove();
                    $("#"+b).append(i);
                    $("#"+b).off();
                    $("#"+c).off();
         
        
        if(c != -1){
        var c = respuesta.id2;
            window.setTimeout(function(){
            $("#"+b).html(carta);
            },2000);           
            
        }
        }
    });
}

function checkCarta() {
    var numImg = $(this).attr('title');
    var idDiv = $(this).parent().attr('id');
    $.ajax({
        type: "POST",
        url: "index.php",
        dataType: "json",
        data: {"id": idDiv, "num": numImg},
        success: function (resposta) {
            var src = resposta.src;
            var id = resposta.id;
            $("#" + id).html("<img src='" + src + "'/>");

            var iguales = resposta.iguales;
            if (iguales === "si") {
                var id2 = resposta.id2;
                $("#" + id).off(); //quitamos los eventos
                $("#" + id2).off();
            }
            if (iguales === "no") {
                var id2 = resposta.id2;
                window.setTimeout(function () {
                    $("#" + id).html("");
                    $("#" + id2).html("");
                }, 2000);
            }
        }
    });
}

function crearCartas(){
    for($i = 0; $i < 12 ; $i++){
        var cartaCrear = $("<div id='"+$i+"' class='col-lg-3'><img src='img/carta.jpg' title='"+$i+"'></div>");
        $("#tablero > div > img").on('click', checkCarta);
        $('#tablero').append(cartaCrear);
    }
}