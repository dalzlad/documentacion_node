const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

const getEmpleadoById = (id) => {
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
        ? resolve(empleado)
        : reject(`El empleado con el id ${id} no existe`)
    })
}

const getSalarioById = (id) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( s => s.id === id)?.salario;

        (salario)

        ?resolve(salario)
        :reject(`El salario para el empleado con el id ${id} no existe`)
    })
}

const getInfoUsuario = async(id) =>{
    try{
        const empleado = await(getEmpleadoById(id))
        const salario = await(getSalarioById(id))
        return(`El salario del empleado ${empleado} es ${salario}`)
    }
    catch(err){
        throw(err)
    }

}

const id = 1

/*getEmpleadoById(id)
    .then(empleado => {
        getSalarioById(id)
        .then(salario => {
            console.log(`El salario del empleado con id: ${id} es salario ${salario}`)
        })
        .catch(err => {
            console.log(err)
        })
    })
*/

getInfoUsuario(id)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(err => {
        console.log(err)
    })

