var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;    
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1, 'rojo', 'urbana', [-25.292067931432953, -57.58402863385648]);
var a = new Bicicleta(1, 'blanca', 'urbana', [-25.294787005520924, -57.58146835396689]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;