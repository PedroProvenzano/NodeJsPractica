const Criatura = require('./Criatura');

class Tigre extends Criatura{
    constructor(nombre, edad){
        super(edad);
        this.nombre = nombre;
    }
    rugir(){
        console.log('rawr');
    }
}

module.exports = Tigre;