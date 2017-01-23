/*
var app = angular.module('myApp', []);
app.controller('nomControlador', ['$scope','miFactory',
    function ($scope,miFactory) {
        $scope.dishes1 =miFactory.getDishes();
        
        $scope.parInt=function(num){
            return parseInt(num);
        };
        $scope.setBackgr=function(){
            $scope.nomStyle="background-color";
        }
    }]);
 */


// Para poner las cosas en scope

var app = angular.module('appCoches', []);
app.controller('controllerCoches', ['$scope', 'concesionario',
    function ($scope, concesionario) {
       
        $scope.nombre = concesionario.coche.getModelo();
        $scope.marca = concesionario.coche.getMarca();
        
        c1 = concesionario.concesionario.crearConcesionario("paco", "calle florecilla");
        $scope.c1 = c1;
        c1.concesionario.getComandaLength();
        //concesionario.addConcesionarios(c1);
        
        c2 = concesionario.concesionario.crearConcesionario("pepe", "calle abejita");
        $scope.c2 = c2;
        //concesionario.addConcesionarios(c2);

        c3 = concesionario.concesionario.crearConcesionario("lenteja", "calle perrico");
        $scope.c3 = c3;
       // concesionario.addConcesionarios(c3);
        
               
       // $scope.comanda = concesionario.concesionarios[0];
        //$scope.comanda1 = concesionario.concesionarios[1].getNombre();
        //$scope.comanda2 = concesionario.concesionarios[2];
  
        
    }
]);