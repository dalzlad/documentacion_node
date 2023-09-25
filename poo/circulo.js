class Rectangulo{

    constructor(largo, ancho){
        this.largo = largo
        this.ancho = ancho
    }

    getArea(){
        return this.largo
    }

    getPerimetro(){
        return this.ancho
    }   
}

const rectangulo1 = new Rectangulo(5,7)

console.log(`El área es:' + ${rectangulo1.getArea()}`)

console.log(`El perímetro es: ${rectangulo1.getPerimetro()}`)