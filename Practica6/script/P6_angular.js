var arrayNumeros = new Array();

function generarNumeros(){
    for(var i = 0; i < 5; i++){
        arrayNumeros[i]= Math.floor((Math.random() * 10) + 1);
    }
}

angular.module('app', [])
        .controller('controller', ['$scope', function ($scope) {
                generarNumeros();
                $scope.arrayNumeros = arrayNumeros;
                $scope.primero = "";
                $scope.ultimo = "";
                $scope.resultado = "";
                var primero = arrayNumeros[0];
                var ultimo = arrayNumeros[arrayNumeros.length - 1];

                $scope.primerUltimoNumero = function () {
                    $scope.primero = primero;
                    $scope.ultimo = ultimo;
                }
                
                $scope.calcular = function () {
                    var operador;
                    var resultado = "";
                    do {
                        operador = prompt("Indique el símbolo de la operación deseada (+, -, *, /)");
                    } while (!isNaN(operador) || operador === null || operador === "");
                    
                    for(var i = 0; i < 5; i++){
                        resultado += numero[i];
                        if(i!=4) resultado += operador;
                    }
                    var total = eval(resultado);
                    $scope.resultado = total;
                }

                $scope.addNumeroFinal = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    arrayNumeros.push(numero);
                }

                $scope.addNumeroInicio = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    arrayNumeros.unshift(numero);
                }

                $scope.deleteNumeroFinal = function () {
                    arrayNumeros.pop();
                }

                $scope.deleteNumeroInicio = function () {
                    numeros.shift();
                }

                $scope.borrarPosicion = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero === null || numero === "");
                    if (numero > arrayNumeros.length) {
                        alert("Número no válido.");
                    } else{
                        arrayNumeros.splice((numero-1), 1);
                    }
                }

                $scope.borrarNumero = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    var index = arrayNumeros.indexOf(numero);
                    if (index > -1) {
                        arrayNumeros.splice(index, 1);
                    }
                    else alert("Número no encontrado."); 
                }
                
            }]);