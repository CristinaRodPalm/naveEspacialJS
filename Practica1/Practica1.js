function pedirNumero(){
    var numero;
    do{
        numero = window.prompt("Introduce un número:");
    }while(isNaN(numero)||numero == null||numero == "");

    return parseInt(numero);
}

function ejercicio1(){
    var numero = pedirNumero();
    cantidadProg = numero;

    for (var i = 0; i < cantidadProg; i++){
        console.log(numero--);
    }
}

function ejercicio2a(){
    var numero = pedirNumero();
    var mostrar = document.getElementById('progresionA');
    
    for (var i = 0; i <= numero; i++){
        if(i%2==0){
            var add = document.createElement("ul");
            add.innerHTML += "<li>"+i+"</li>";
            mostrar.appendChild(add);
        }
        
    }
}

function ejercicio2b(){
    var numero = pedirNumero();
    
    cantidadProg = numero;

    for (var i = 0; i <= cantidadProg; i++){
        var mostrar = document.getElementById('progresionB');
        var add = document.createElement("ul");
        var numMostrar = numero--;
        add.innerHTML = "<li>"+numMostrar+"</li>";
        mostrar.appendChild(add);
    }
}

function ejercicio2c(){
    var n1 = pedirNumero();
    var n2 = pedirNumero();
   
    if(n1 > n2){
        console.log(n1+" es más grande");
        document.getElementById('resultado').innerHTML = (n1+" es mayor que "+n2);
    }else{
        console.log(n2+" es más grande");
        document.getElementById('resultado').innerHTML = (n2+" es mayor que "+n1);
    }
}

function ejercicio2d(){
    var dia;
    var resultado = document.getElementById('resultadoD');
    do{
        dia = window.prompt("Introduce el día de la semana deseado:").toLowerCase();
    }while(dia == null||dia === "");
    
    var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    
    for(var i = 0; i < diasSemana.length; i++){
        if(dia === diasSemana[i]){
            var diaMostrar = i+1;
            resultado.innerHTML = dia+" es el día número "+diaMostrar+" de la semana";
            console.log(dia+" es el día número "+diaMostrar+" de la semana");
        }
    }
}

function ejercicio2e(){
    var numAdivinar = Math.floor((Math.random() * 100) + 1);
    console.log(numAdivinar);
    var resultado = document.getElementById('resultadoE');
    var numero;
    var intentos = 0;
    
    do{
        intentos++;
        numero = window.prompt("Escoge un número para jugar");
        if(isNaN(numero)||numero == null||numero == ""){
            numero = window.prompt("Número no válido, elige otro");
        }
        
        numero = parseInt(numero);
        
        if(numero < numAdivinar){
            resultado.innerHTML = ("El número que buscas es mayor que "+numero);
            console.log("mas grande");
        }else if(numero > numAdivinar){
            resultado.innerHTML = ("El número que buscas es menor que "+numero);
            console.log("más pequeño");
        }else if(numero == numAdivinar){
            resultado.innerHTML = ("Enhorabuena, has acertado con "+intentos+" intentos.");
        }
    }while(numero != numAdivinar);
}

function sumar(){
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
    
    var result = document.getElementById('resultadoCalculo');
    var total = numero1 + numero2;
    result.innerHTML = ("El resultado de la suma es "+total);
}

function restar(){
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
    
    var result = document.getElementById('resultadoCalculo');
    var total = numero1 - numero2;
    result.innerHTML = ("El resultado de la resta es "+total);
}

function multiplicar(){
    var result = document.getElementById('resultadoCalculo');
    result.innerHTML = "";

    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
        
    var resultado = 1;
    
    for(var i = 1 ; i <= numero2; i++) {
        var lista = document.getElementById('resultadoCalculo');
        var add = document.createElement("ul");
        resultado *= i;
        add.innerHTML = "<li>"+resultado+"</li>";
        lista.appendChild(add);
    }   
}
    
function dividir(){
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
    var lista = document.getElementById('resultadoCalculo');
    
    if(numero2 != 0){
        var result = numero1 / numero2;
        lista.innerHTML = "El resultado de la división es "+result;
    }else{
        lista.innerHTML = "<div class='alert alert-danger' id='alertaError'> \
                                    <strong>Error:</strong> No se puede dividir "+numero1+" entre "+numero2+"\
                              </div>";  
    }
}