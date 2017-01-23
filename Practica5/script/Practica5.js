var nave = $("<img id='nave' src='nave.png'/>");
var puntos = 0;
var interval;

$(document).ready(function(){
    $('#login').click(login);
    $('#start').click(startGame);
    
    //detectar teclas
    $(document).keydown(function (e) {
        switch (e.which) {
            //izquierda
            case 37: nave.stop().animate({
                        left: '-=30'
                    }); 
                    break;
            //arriba
            case 38: nave.stop().animate({
                        top: '-=30'
                    });
                    break;
            //derecha
            case 39: nave.stop().animate({
                        left: '+=30'
                    }); 
                    break;
            //abajo
            case 40: nave.stop().animate({
                        top: '+=30'
                    });
                    break;
        }
    });

});

function login(){
    puntos = 0;
    $("#escudo").css("width", "200px");
    var nombre = $('#name').val(); 
    var puntuacion = 0;
   
    $.ajax({
        type:"POST",
        url:"script/users.php",
        dataType:"json",
        data:{"nombreUsuario": nombre, "puntuacionUsuario": puntuacion},
        success: function(respuesta){
                    var ul = "<ul>";
                    var i = 0;
                    for(var aux in respuesta.usuarios){
                        if(i !== (respuesta.usuarios).length - 1){   
                            ul += "<li>Nombre: "+respuesta.usuarios[aux].nombre+", puntuación: "+respuesta.usuarios[aux].puntuacion+"</li>";
                        }
                        console.log(respuesta.usuarios[aux].nombre);
                        console.log(respuesta.usuarios[aux].puntuacion);
                       i++;
                    }
                    ul += "</ul>";
                    
                    $("#listaUsuarios > ul > li").remove();
                    $("#listaUsuarios").html(ul);
                    
                    //muestra el tablero
                    $("#espacio").css("display", "block");
                    $("#espacio").append(nave);
                    nave.css("position", "absolute");
                    
                    //mostramos el botón start de la partida
                    $("#start").css("display", "block");
        },
        error : function(xhr, status) {
            alert('¡Ha habido un error en el login!');
        }
    });
}


function startGame(){
    $("#start").css("display", "none");    
    interval = setInterval(crearMeteorito, 1000);
}

function meteoritoCss(meteorito, random){
    meteorito.css({
        "width":"60px",
        "top": random +"px",
        "position":"absolute",
        "left":"940px"
    });
}
    
function crearMeteorito(){
    
    $.ajax({
        type: "POST", 
        url: "script/meteoritos.php", 
        dataType: "json", 
        data: {altura: $("#espacio").css("height")},
        success: function(respuesta){
            var meteorito = $("<img id='meteorito' src='asteroide.png'/>");
            meteoritoCss(meteorito, respuesta.random);
            $("#espacio").append(meteorito);
            
            meteorito.animate(
                    {"left": "-30"}, 
                    {duration: 2000, 
                        step: function(now, fx){
                                $("#puntuacion").html(puntos);
                                
                                if ($(meteorito).hittest($(nave))) {
                                    meteorito.remove();
                                    $("#escudo").animate(
                                        {"width": "-=20"},
                                        {step: function(now, fx){
                                                if($("#escudo").width() == 90){
                                                    $("#escudo").css("background-color", "orange");
                                                }
                                                if($("#escudo").width() == 30){
                                                    $("#escudo").css("background-color", "red");
                                                }
                                                if($("#escudo").width() == 0){
                                                    $("#escudo").css("background-color", "white");
                                                    $("#escudo").html("Has perdido");
                                                    clearInterval(interval);
                                                    nave.stop();
                                                    console.log("Has perdido");
                                                }
                                            }
                                        
                                    })
                                }
                            },
                        complete: function(){
                                    puntos++;
                                    meteorito.remove();
                                }
                    }
                );
        }
    });
}