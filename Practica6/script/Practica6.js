var arrayNumeros = new Array();

$(document).ready(function(){
    generarNumeros();
    $("#ejercicio1").click(primerUltimoNumero);
    $("#ejercicio2").click(addNumeroFinal);
    $("#ejercicio3").click(addNumeroInicio);
    $("#ejercicio4").click(deleteNumeroFinal);
    $("#ejercicio5").click(deleteNumeroInicio);
    $("#ejercicio6").click(calcular);
    $("#ejercicio7").click(borrarPosicion);
    $("#ejercicio8").click(borrarNumero);
});

function mostrarNumeros(){
    $("#array").html("");
    for(var i = 0; i < arrayNumeros.length; i++){
        $("#array").append("<div id='numeros'>"+arrayNumeros[i]+"</div>");
    }
}

function generarNumeros(){
    for(var i = 0; i < 5; i++){
        var random = Math.floor((Math.random() * 10) + 1);
        arrayNumeros.push(random);
        $("#array").append("<div id='numeros'>"+arrayNumeros[i]+"</div>");
    }
}

function primerUltimoNumero(){
    console.log(arrayNumeros[0]);
    console.log(arrayNumeros[arrayNumeros.length - 1]);
    $("#resultado").append("Primera posición "+arrayNumeros[0]+", última posición "+arrayNumeros[arrayNumeros.length - 1])
}
function addNumeroFinal(){
    var numero = prompt("Añade un número para añadir al final");
    arrayNumeros.push(numero);
    mostrarNumeros();
}
function addNumeroInicio(){
    var numero = prompt("Añade un número para añadir al principio");
    arrayNumeros.unshift(numero);
    mostrarNumeros();
}
function deleteNumeroFinal(){ 
    arrayNumeros.pop();
    mostrarNumeros();
}
function deleteNumeroInicio(){
    arrayNumeros.shift();
    mostrarNumeros();
}
function calcular(){
    var operador = prompt("Indique el símbolo de la operacion deseada (+, -, *, /)");
    var resultado = "";
    for(var i = 0; i < 5; i++){
        resultado += arrayNumeros[i];
        if(i!=4) resultado += operador;
    }
    var total = eval(resultado);
    $("#resultado").append("Resultado: "+total);
}
function borrarPosicion(){
    var numero = prompt("Añade un número de la posición que quieres eliminar");
    arrayNumeros.splice(numero-1, 1);
    mostrarNumeros();
}
function borrarNumero(){
    var numero = prompt("Añade un número que quieres eliminar");
    for(var i = 0; i < arrayNumeros.length; i++){
        if(numero == arrayNumeros[i]){
            arrayNumeros.splice(i, 1);
        }
    }
    mostrarNumeros();
}