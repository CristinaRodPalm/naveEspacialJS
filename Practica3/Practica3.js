var img_select;
var img_replace;

var fichas_inicio = {
    ficha1: "img1"
    , ficha2: "img2"
    , ficha3: "img3"
    , ficha4: "img4"
    , ficha5: "img5"
    , ficha6: "img6"
    , ficha7: "img7"
    , ficha8: "img8"
    , ficha9: "img9"
};

var fichas_final = {
    ficha1: "img1"
    , ficha2: "img2"
    , ficha3: "img3"
    , ficha4: "img4"
    , ficha5: "img5"
    , ficha6: "img6"
    , ficha7: "img7"
    , ficha8: "img8"
    , ficha9: "img9"
};

$(document).ready(init); 

function init() {
    $('#cartas > div > img').click(moverCarta);
    $('#tablero > div > img').click(moverCartaTablero);
    $('#comprobar').click(comprobar);
}

function moverCarta() {
    if ($('#carta_seleccionada').children().length == 0) {
       img_select = $(this);
       $('#carta_seleccionada').append(this);
    } else {
        img_replace = img_select;
        img_select = $(this);
        var b = $('#carta_seleccionada>img').attr('title');
        $(b).append(img_replace);
        $('#carta_seleccionada').append(img_select);
    }
}

function moverCartaTablero(){
    $(this).attr('src', img_select.attr('src'));
    $('#carta_seleccionada > img').remove();
}

function comprobar(){
    $('#tablero > div').each(function (index) {
        var src = $(this).children().attr("src");
        ficha_pos = fichas_final["ficha" + (index + 1)] + ".jpg";
        
        if(src === ficha_pos) $(this).css({"background-color": "green"}); 
        else $(this).css({"background-color": "red"});
    });
}