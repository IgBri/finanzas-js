//Arrays de ingresos
const salarios = []
const inversiones = []
const emprendimientos = []
//Clases para objetos
class Salario{
    static id = 0
    constructor(monto, moneda, mesLiquidado){
        this.id = ++Salario.id,
        this.monto = monto,
        this.moneda = moneda,
        this.mesLiquidado = mesLiquidado
    }
}
class Inversion{
    static id = 0
    constructor (montoInvertido, moneda, porcentaje, resultadoNeto){
        this.id = ++Inversion.id,
        this.montoInvertido = montoInvertido,
        this.moneda = moneda,
        this.porcentaje = porcentaje,
        this.resultadoNeto = resultadoNeto
    }
}
class Emprendimiento{
    static id = 0
    constructor (actividad, resultadoNeto){
        this.id = ++Emprendimiento.id,
        this.actividad = actividad,
        this.resultadoNeto = resultadoNeto
    }
}

//Funciones de los ingresos

/*const crearInversion = () =>{
    let cargaMonto = parseFloat(prompt("¿Cuanto fue el capital invertido?"))
    let cargaMoneda = prompt("¿En que moneda? (ars o usd)")
    let cargaPorcentaje = parseFloat(prompt("¿Que porcentaje vario la inversion?"))
    let cargaResultadoNeto = () => (cargaPorcentaje*cargaMonto)/100

    const inversion = new Inversion (cargaMonto, cargaMoneda, cargaPorcentaje, cargaResultadoNeto())
    inversiones.push(inversion)
}
const verInversiones = () =>{
    if (inversiones.length === 0){
        alert("Aun no hay inversiones cargadas")
    }else {
        console.log(inversiones)
        console.log("El resultado neto en concepto de inversiones es de $ "+inversiones.reduce((contador, inversion) => contador + inversion.resultadoNeto, 0))
    }
}*/
/*const crearEmprendimiento = () =>{
    let cargaActividad = prompt("¿En que rubro emprendes?")
    let cargaResultadoNeto = parseFloat(prompt("¿Cual fue el balance mensual?(Ejemplo: 300000 (ganancia) | -300000 (perdida))"))

    const emprendimiento = new Emprendimiento (cargaActividad, cargaResultadoNeto)
    emprendimientos.push(emprendimiento)
}*/
const verEmprendimientos = () =>{
    if (emprendimientos.length === 0){
        alert("Aun no hay facturas cargadas")
    }else {
        console.log(emprendimientos)
        console.log("El balance mensual total en concepto de emprendimientos es de $ "+emprendimientos.reduce((contador, emprendimiento) => contador + emprendimiento.resultadoNeto, 0))
    }
}

//localStorage
//DOM
//Enlace a Registros de ingresos | SALARIO
/*let registroIngreso = document.getElementById("botonSalario")
registroIngreso.addEventListener("click", crearSalario)
//Enlace a Registros de ingresos | INVERSIONES
let registroInversiones = document.getElementById("botonInversion")
registroInversiones.addEventListener("click", crearInversion)
//Enlace a Registros de ingresos | EMPRENDIMIENTOS
let registroEmprendimiento = document.getElementById("botonEmprendimiento")
registroEmprendimiento.addEventListener("click", crearEmprendimiento)*/

//Enlace a inputs SALARIO
let inputMontoSalario = document.getElementById("inputMontoSalario")
let inputMonedaSalario = document.getElementById("inputMonedaSalario") 
let inputMesLiquidado = document.getElementById("inputMesSalario")
//Enlace al boton AGREGAR SALARIO
let botonAgregarSalario = document.getElementById("botonAgregarSalario")
//Enlace a div donde se inyectan los resultados
let lineaDatosCargadosSalarios = document.getElementById("datosCargadosSalario")
let lineaTotalSalario = document.getElementById("salarioTotal")

//Proceso
const crearSalario = () => {
    let montoAlmacenado = parseFloat(inputMontoSalario.value)
    let monedaAlmacenada = inputMonedaSalario.value
    let meslmacenado = inputMesLiquidado.value

    const salario = new Salario (montoAlmacenado, monedaAlmacenada, meslmacenado)

    salarios.push(salario)
    //console.log a sacar
    console.log(salarios)

    salarios.forEach((salario, index) => {
        if(index === salarios.length-1){
            let salarioIngresado = document.createElement("div")
            salarioIngresado.className = "lineaResultado"
            salarioIngresado.innerHTML = `<span>${salario.id}</span>
                                    <span>${salario.monto}</span>
                                    <span>${salario.moneda}</span>
                                    <span>${salario.mesLiquidado}</span>`
            lineaDatosCargadosSalarios.appendChild(salarioIngresado)
        }
    })
    let montoFinal = salarios.reduce((contador, salario) => contador + salario.monto, 0)
    lineaTotalSalario.innerHTML = parseFloat(montoFinal)
}
//Evento para guardar | CLICK
botonAgregarSalario.addEventListener("click", crearSalario)
//botonAgregarSalario.addEventListener("click", crearMontoTotal)

//-----------------------------------------------------------------------

//Enlace a inputs INVERSIONES
let inputCapitalInvertido = document.getElementById("inputCapitalInvertido")
let inputMonedaInvertida = document.getElementById("inputMonedaInvertida")
let inputVariacionInversion = document.getElementById("inputVariacionInversion")
let inputResultadoInversion = document.getElementById("inputResultadoInversion")
//Enlace al boton AGREGAR INVERSION 
let botonAgregarInversion = document.getElementById("botonAgregarInversion")
//Enlace a div donde se inyectan los resultados
let lineaDatosCargadosInversiones = document.getElementById("datosCargadosInversiones")
let lineaTotalInversion = document.getElementById("inversionTotal")
//Proceso
const cargaResultadoNeto = (porcentaje, monto) => (porcentaje*monto)/100

botonAgregarInversion.onclick = () => {
    let capitalInvertido = parseFloat(inputCapitalInvertido.value)
    let monedaInvertida = inputMonedaInvertida.value
    let variacionInversion = parseFloat(inputVariacionInversion.value)

    const resultadoNeto = cargaResultadoNeto(capitalInvertido, variacionInversion)

    const inversion = new Inversion (capitalInvertido, monedaInvertida, variacionInversion, resultadoNeto)
    inversiones.push(inversion)
    
    //console.log(inversiones)

    inversiones.forEach((inversion, index) => {
        if(index === inversiones.length-1){
            let inversionIngresada = document.createElement("div")
            inversionIngresada.className = "lineaResultado"
            inversionIngresada.innerHTML = `<span>${inversion.id}</span>
                                    <span>${inversion.montoInvertido}</span>
                                    <span>${inversion.moneda}</span>
                                    <span>${inversion.resultadoNeto}</span>`
            lineaDatosCargadosInversiones.appendChild(inversionIngresada)
        }
    })
    let montoFinal = inversiones.reduce((contador, inversion) => contador + inversion.resultadoNeto, 0)
    lineaTotalInversion.innerHTML = parseFloat(montoFinal)
}


//-----------------------------------------------------------------------

//Enlace a inputs EMPRENDIMIENTOS
let inputRubro = document.getElementById("inputRubroEmprendimiento")
let inputBalanceEmprendimiento = document.getElementById("inputBalanceEmprendimiento")
//Enlace a boton agregar emprendimiento
let botonAgregarEmprendimiento = document.getElementById("botonAgregarEmprendimiento")
//Enlace a div donde se inyectan los resultados
let datosCargados = document.getElementById("datosCargados")
let lineaTotalEmprendimiento = document.getElementById("balanceTotal")

//Evento "click" sobre boton "agregar"
botonAgregarEmprendimiento.onclick = () => {
    let rubroAlmacenado = inputRubro.value
    let balanceEmprendimientoAlmacenado = parseFloat(inputBalanceEmprendimiento.value)

    const emprendimiento = new Emprendimiento (rubroAlmacenado, balanceEmprendimientoAlmacenado)
    emprendimientos.push(emprendimiento)
    console.log(emprendimientos)

    emprendimientos.forEach((emprendimiento, index) => {
        if(index === emprendimientos.length-1){
            let resultados = document.createElement("div")
            resultados.className = "lineaResultado"
            resultados.innerHTML = `<span>${emprendimiento.id}</span>
                                    <span>${emprendimiento.actividad}</span>
                                    <span>${emprendimiento.resultadoNeto}</span>`
            datosCargados.appendChild(resultados)
        }
    })
    let montoFinal = emprendimientos.reduce((contador, emprendimiento) => contador + emprendimiento.resultadoNeto, 0)
    lineaTotalEmprendimiento.innerHTML = parseFloat(montoFinal)
}














