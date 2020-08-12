const SerVivo = require('./SerVivo');
const serVivo = require('./SerVivo');

class Criatura extends serVivo{
    constructor(edad) {
        super();
        this.edad = edad;
    }
    crecer(){
        this.edad++
    }
}

module.exports = Criatura;