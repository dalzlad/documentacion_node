class Vehiculo{

    constructor(placa, color, modelo){

        this.placa = placa
        this.color = color
        this.modelo = modelo
    }

    getPlaca(){
        return this.placa()
    }

    getColor(){
        return this.color()
    }

    getModelo(){
        return this.modelo()
    }

}

const vehiculo1 = new Vehiculo('D1',1,1)

console.log('placa: '+vehiculo1.placa)


/*
const btnCalcular = document.querySelector('#btnCalcular')
btnCalcular.addEventListener('click', console.log(vehiculo1.placa))
*/