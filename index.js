alert("Bienvenido al proyecto de Ignacio Brizuela")
//Arrays
//Arrays de ingresos
const salarios = []
const inversiones = []
const emprendimientos = []
//Arrays de egresos
const facturas = []
const creditos = []

//Funciones
const inicio = () => {
    let menu = parseInt(prompt("1- Ingresos \n2- Egresos \n3- Salir"))
    while(menu<3){
        switch(menu){
            case 1:
                cargaIngresos()
                break
            case 2: 
                cargaEgresos()
                break
            default:
                break
        }
        menu = parseInt(prompt("1- Ingresos \n2- Egresos \n3- Salir"))
    }
}
//Registro de ingresos
const cargaIngresos = () =>{
    let menu2 = parseInt(prompt("1- Carga tus salarios \n2- Carga tus inversiones \n3- Carga tus emprendimientos \n4- Ver dinero total ingresado en concepto de salarios \n5- Ver resultado final en concepto de inversiones \n6- Ver balance total de los emprendimientos \n7- Volver"))
    while(menu2<8){
        switch(menu2){
            case 1:
                crearSalario()
                break
            case 2:
                crearInversion()
                break
            case 3:
                crearEmprendimiento()
                break
            case 4:
                verSalarios()
                break
            case 5:
                verInversiones()
                break
            case 6:
                verEmprendimientos()
                break
            case 7:
                inicio()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
        menu2 = parseInt(prompt("1- Carga tus salarios \n2- Carga tus inversiones \n3- Carga tus emprendimientos \n4- Ver dinero total ingresado en concepto de salarios \n5- Ver resultado final en concepto de inversiones \n6- Ver balance total de los emprendimientos \n7- Volver"))
    }
}
//Registro de egresos
const cargaEgresos = () =>{
    let menu3 = parseInt(prompt("1- Carga tus facturas \n2- Carga tus deudas crediticias \n3- Ver el monto total a abonar de las facturas. \n4- Ver el monto total a abonar de deudas crediticias \n5- Volver."))
    while(menu3<6){
        switch(menu3){
            case 1: 
                crearFactura()
                break
            case 2:
                crearCredito()
                break
            case 3:
                verFacturas()
                break
            case 4:
                verCreditos()
                break
            case 5:
                inicio()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
        menu3 = parseInt(prompt("1- Carga tus facturas \n2- Carga tus deudas crediticias \n3- Ver el monto total a abonar de las facturas. \n4- Ver el monto total a abonar de deudas crediticias \n5- Volver."))
    }
}
//Funciones de los ingresos
const crearSalario = () =>{
    let cargaMonto = parseFloat(prompt("¿Cual es el monto?"))
    let cargaMoneda = prompt("¿En que moneda?")
    let cargaMesLiquidado = prompt("¿A que mes corresponde esta liquidacion?")

    const salario = new Salario (cargaMonto, cargaMoneda, cargaMesLiquidado)
    salarios.push(salario)
}
const verSalarios = () =>{
    if (salarios.length === 0){
        alert("Aun no hay recibos de sueldo cargados")
    }else {
        console.log(salarios)
        console.log("El monto total ingresado en concepto de salarios es de $ "+salarios.reduce((contador, salario) => contador + salario.monto, 0))
    }
}
const crearInversion = () =>{
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
}
const crearEmprendimiento = () =>{
    let cargaActividad = prompt("¿En que rubro emprendes?")
    let cargaResultadoNeto = parseFloat(prompt("¿Cual fue el balance mensual?(Ejemplo: 300000 (ganancia) | -300000 (perdida))"))

    const emprendimiento = new Emprendimiento (cargaActividad, cargaResultadoNeto)
    emprendimientos.push(emprendimiento)
}
const verEmprendimientos = () =>{
    if (emprendimientos.length === 0){
        alert("Aun no hay facturas cargadas")
    }else {
        console.log(emprendimientos)
        console.log("El balance mensual total en concepto de emprendimientos es de $ "+emprendimientos.reduce((contador, emprendimiento) => contador + emprendimiento.resultadoNeto, 0))
    }
}
//Funciones de los egresos
const crearFactura = () =>{
    let cargarServicio = prompt("¿A que servicio corresponde esta factura?")
    let cargarMonto = parseFloat(prompt("¿Cual es el monto a abonar?"))
    let cargarVencimiento = prompt("¿En que fecha vence la factura? (DD/MM/AA)")

    const factura = new Factura (cargarServicio, cargarMonto, cargarVencimiento)
    facturas.push(factura)
    alert("La factura ha sido correctamente cargada")
}
const verFacturas = () =>{
    if (facturas.length === 0){
        alert("Aun no hay facturas cargadas")
    }else {
        console.log(facturas)
        console.log("El total de las facturas ingresadas es de $ "+facturas.reduce((contador, factura) => contador + factura.monto, 0))
    }
}
/*const totalFacturas = () => {
    let total = facturas.reduce((contador, factura) => contador + factura.monto, 0)
    return total
}*/
const crearCredito = () =>{
    let cargarMonto = parseFloat(prompt("¿De cuanto es la deuda?"))
    let cargarEntidad = prompt("¿A que entidad se le debe pagar?")
    let cargarVencimiento = prompt("¿En que fecha vence la deuda? (DD/MM/AA)")

    const credito = new Credito (cargarMonto, cargarEntidad, cargarVencimiento)
    creditos.push(credito)
}
const verCreditos = () =>{
    if (creditos.length === 0){
        alert("Aun no hay deudas crediticias cargadas")
    }else {
        console.log(creditos)
        console.log("El total de las deudas crediticias es de $ "+creditos.reduce((contador, credito) => contador + credito.monto, 0))
    }
}

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
class Factura {
    static id = 0
    constructor(servicio, monto, vencimiento){
        this.id = ++Factura.id
        this.servicio = servicio,
        this.monto = monto,
        this.vencimiento = vencimiento
    }
}
class Credito {
    static id = 0
    constructor(monto, entidad, vencimiento){
        this.id = ++Credito.id,
        this.monto = monto,
        this.entidad = entidad,
        this.vencimiento = vencimiento
    }
}

//Inicio de ejecucion
inicio()