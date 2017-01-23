// Métodos
app.service('concesionario', function() {
    
    this.coche = new Coche();
    this.coche.crearCoche("opel", "corsa", "12000€");
    
    this.concesionarios = [];
   
    this.concesionario = new Concesionario();

    // Objeto coche
    function Coche(){
        this.modelo;
        this.precio;
        this.marca;

        this.setModelo = function(modelo){ this.modelo = modelo; }
        this.getModelo = function(){ return this.modelo; }
        
        this.setMarca = function(marca){ this.marca = marca; }
        this.getMarca = function(){ return this.marca; }
        
        this.setPrecio = function(precio){ this.precio = precio; }
        this.getPrecio = function(){ return this.precio; }   
        
        this.crearCoche = function(marca, modelo, precio){
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
    }
    // Objeto concesionario
    function Concesionario(){
        this.nombre;
        this.direccion;
        this.comanda = [];
        
        this.getNombre = function(){ return this.nombre; }
        this.setNombre = function(nombre){ this.nombre = nombre; }
        
        this.getDireccion = function(){ return this.direccion; }
        this.setDireccion = function(direccion){ this.direccion = direccion; }
        
        this.crearConcesionario = function(nombre, direccion){
            this.nombre = nombre;
            this.direccion = direccion;
            // le devolvemos el objeto que hemos creado
            return this;
        }
        
        this.addComanda = function(coche){
            this.comanda.push(coche);
            var cantidad = this.comanda.length;
            return cantidad;
        }
        this.getComanda = function(index){
            return this.comanda[index];
        }
        this.getComandasLength = function(){
            return this.comanda.length;
        }
    }
    
    this.addConcesionarios = function(concesionario){
        this.concesionarios.push(this.concesionarios.length+1, concesionario);
    }

});
