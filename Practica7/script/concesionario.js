
var extras = ["ABS", "Faros láser", "ACC", "Navegador", "Techo Solar"];

var extra1; var extra2;

var coche1 = new Coche();
coche1.modelo = "DeLorean"; coche1.precio = "10000€";
do{
    extra1 = extras[Math.floor((Math.random() * 4))];
    extra2 = extras[Math.floor((Math.random() * 4))];
}while(extra1 == extra2);
coche1.addExtra(extra1); coche1.addExtra(extra2);

var coche2 = new Coche();
coche2.modelo = "Corsa"; coche2.precio = "20000€";
do{
    extra1 = extras[Math.floor((Math.random() * 4))];
    extra2 = extras[Math.floor((Math.random() * 4))];
}while(extra1 == extra2);
coche2.addExtra(extra1); coche2.addExtra(extra2);

var coche3 = new Coche();
coche3.modelo = "Berlinetta"; coche3.precio = "50000€";
do{
    extra1 = extras[Math.floor((Math.random() * 4))];
    extra2 = extras[Math.floor((Math.random() * 4))];
}while(extra1 == extra2);
coche3.addExtra(extra1); coche3.addExtra(extra2);

var coche4 = new Coche();
coche4.modelo = "Testarossa"; coche4.precio = "75000€";
do{
    extra1 = extras[Math.floor((Math.random() * 4))];
    extra2 = extras[Math.floor((Math.random() * 4))];
}while(extra1 == extra2);
coche4.addExtra(extra1); coche4.addExtra(extra2);

var concesionario = new Concesionario();
concesionario.nombre = "STUCOM!";
concesionario.direccion = "C/ Pelayo 8";
concesionario.addComanda(coche1); concesionario.addComanda(coche2); 
concesionario.addComanda(coche3); concesionario.addComanda(coche4);

// Objeto coche
function Coche(){
    this.modelo;
    this.precio;
    this.extras = [];
    // Add extra
    this.addExtra = function(nombreExtra){
        this.extras.push(nombreExtra);
        var cantidad = this.extras.length-1;
        return cantidad;
    };
    // Get extra a partir de la posición    
    this.getExtra = function(extra){
        var extraSelect = this.extras[numExtra];
        return extraSelect;
    };
    this.getExtras = function(){
        return this.extras.length;
    }
    this.getExtraPos = function(posicion){
        return this.extras[posicion];
    }
}

// Objeto concesionario
function Concesionario(){
    this.nombre;
    this.direccion;
    this.comanda = [];
    
    this.setNombre = function(nombre){
        this.nombre = nombre;
    }
    this.setDireccion = function(direccion){
        this.direccion = direccion;
    }
    this.addComanda = function(coche){
        this.comanda.push(coche);
        var cantidad = this.comanda.length;
        return cantidad;
    }
    this.getComandas = function(){
        return this.comanda.length;
    }
}

$(document).ready(function(){
   llenarTabla();
});

function llenarTabla(){
    document.write("<table border=1 style='width:100%'>");
    document.write("<tr>");
        document.write("<td>Nombre: "+concesionario.nombre+"</td>");
        document.write("<td> Dirección: "+concesionario.direccion+"</td>");
    document.write("</tr>");
    
    document.write("<td> COMANDAS </td>");
    
    document.write("<tr>");
        document.write("<th> Posición </th>");
        document.write("<th> Nombre </th>");
        document.write("<th> Precio </th>");
        document.write("<th> Extras </th>");
    document.write("</tr>");
    
    var cantidadComandas = concesionario.getComandas();
    
    for(var i = 0; i < cantidadComandas; i++){
        var coche = concesionario.comanda[i];
        document.write("<tr>");
            document.write("<td>"+(i+1)+"</td>");
            document.write("<td>"+coche.modelo+"</td>");
            document.write("<td>"+coche.precio+"</td>");
            var cantidadExtras = coche.getExtras();
            document.write("<td>");
            for(var k = 0; k < cantidadExtras; k++){
                document.write(coche.extras[k]+"<br/>");
            }
            document.write("</td>");
        document.write("</tr>");
    }
   
    document.write("</table>");
}
