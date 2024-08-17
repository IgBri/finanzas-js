//Arrays
//Arrays de ingresos
let salarios = JSON.parse(localStorage.getItem("ingreso-salarios")) || []
let inversiones = JSON.parse(localStorage.getItem("ingreso-inversiones")) || []
let emprendimientos = JSON.parse(localStorage.getItem("ingreso-emprendimientos")) || []
let cashSalarios = JSON.parse(localStorage.getItem("cash-salarios")) || []
let cashInversiones = JSON.parse(localStorage.getItem("cash-inversiones")) || []
let cashEmprendimientos = JSON.parse(localStorage.getItem("cash-emprendimientos")) || []
//Arrays de egresos
let facturas = JSON.parse(localStorage.getItem("egreso-factura")) || []
let creditos = JSON.parse(localStorage.getItem("egreso-credito")) || []
let cashFacturas = JSON.parse(localStorage.getItem("cash-facturas")) || []
let cashCreditos = JSON.parse(localStorage.getItem("cash-creditos")) || []

//-------------------------------------------------------

//Clases para ingresos
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
    constructor (actividad, resultadoNeto, moneda){
        this.id = ++Emprendimiento.id,
        this.actividad = actividad,
        this.resultadoNeto = resultadoNeto,
        this.moneda = moneda
    }
}
//-------------------------------------------------------
//Clases para los egresos
class Factura {
    static id = 0
    constructor(servicio, monto, vencimiento){
        this.id = ++Factura.id,
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

//-------------------------------------------------------

//Funciones generales
function montoFinal (array) {
    return array.reduce((contador, transaccion) => contador + transaccion.monto, 0)
}
function resultadoNetoFinal (array) {
    return array.reduce((contador, transaccion) => contador + transaccion.resultadoNeto, 0)
}
function calculaResultadoNeto (monto, porcentaje) {
    const resultado = (porcentaje*monto)/100
    return resultado
}
function limpiarDatosIngresos () {
    //campos a borrar SALARIOS
    inputMontoSalario.value = ""
    inputMonedaSalario.value = ""
    inputMesLiquidado.value = ""
    lineaDatosCargadosSalarios.innerHTML = ""
    lineaTotalSalario.innerHTML = ""
    //campos a borrar INVERSIONES
    inputCapitalInvertido.value = ""
    inputMonedaInvertida.value = ""
    inputVariacionInversion.value = ""
    lineaDatosCargadosInversiones.innerHTML = ""
    lineaTotalInversion.innerHTML = ""
    //campos a borrar EMPRENDIMIENTOS
    inputRubro.value = ""
    inputBalanceEmprendimiento.value = ""
    inputMonedaEmprendimiento.value = ""
    datosCargadosEmprendimientos.innerHTML = ""
    lineaTotalEmprendimiento.innerHTML = ""
}
function limpiarDatosEgresos () {
    //campos a borrar FACTURAS
    inputServicio.value = ""
    inputMontoFactura.value = ""
    inputVencimientoFactura.value = ""
    lineaDatosCargadosFacturas.innerHTML = ""
    lineaTotalFacturas.innerHTML = ""
    //campos a borrar CREDITOS
    inputMontoDeuda.value = ""
    inputAcreedor.value = ""
    inputVencimientoDeuda.value = ""
    lineaDatosCargadosCreditos.innerHTML = ""
    lineaTotalCredito.innerHTML = ""
}
function cargarArrayIngresos (array) {
    switch(array){
        case salarios:
            localStorage.setItem("ingreso-salarios", JSON.stringify(array))
            localStorage.setItem("cash-salarios", JSON.stringify(cashSalarios))
            break
        case inversiones:
            localStorage.setItem("ingreso-inversiones", JSON.stringify(array))
            localStorage.setItem("cash-inversiones", JSON.stringify(cashInversiones))
            break
        case emprendimientos:
            localStorage.setItem("ingreso-emprendimientos", JSON.stringify(array))
            localStorage.setItem("cash-emprendimientos", JSON.stringify(cashEmprendimientos))
            break
        default:
            //
    }
}
function cargarArrayEgresos (array) {
    switch(array){
        case facturas:
            localStorage.setItem("egreso-facturas", JSON.stringify(array))
            localStorage.setItem("cash-facturas", JSON.stringify(cashFacturas))
            break
        case creditos:
            localStorage.setItem("egreso-creditos", JSON.stringify(array))
            localStorage.setItem("cash-creditos", JSON.stringify(cashCreditos))
            break
        default:
            //
    }
}
async function convertirInversion (moneda, monto, porcentaje) {
    let resultado = "Conversion erronea"
    try {
        switch(moneda){
            case "usd":
                await fetch("https://dolarapi.com/v1/dolares/oficial")
                .then(response => response.json())
                .then(data => {
                    const precio = data.compra
                    resultado = precio*calculaResultadoNeto(monto, porcentaje)
                    return resultado
                })
                break
            case "eur":
                await fetch("https://dolarapi.com/v1/cotizaciones/eur")
                .then(response => response.json())
                .then(data => {
                    const precio = data.compra
                    resultado = precio*calculaResultadoNeto(monto, porcentaje)
                    return resultado
                })
                break
            case "ars":
                resultado = calculaResultadoNeto(monto, porcentaje)
                break
            default:
                throw new Error(error())
        }
        
    } catch (err) {
        resultado = err
    }
    return resultado
}
async function montoConvertido (monto, moneda) {
    let resultado = "Conversion erronea"
    try {
        switch(moneda){
            case "usd":
                await fetch("https://dolarapi.com/v1/dolares/oficial")
                .then(response => response.json())
                .then(data => {
                    const precio = data.compra
                    resultado = precio*monto
                    return resultado
                })
                break
            case "eur":
                await fetch("https://dolarapi.com/v1/cotizaciones/eur")
                .then(response => response.json())
                .then(data => {
                    const precio = data.compra
                    resultado = precio*monto
                    return resultado
                })
                break
            case "ars":
                resultado = monto
                break
            default:
                throw new Error(error())
        }
    } catch (err){
        resultado = err
    }
    return resultado
}
function saveAlert () {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Los registros han sido guardados",
        showConfirmButton: false,
        timer: 1000
    });
}
function error () {
    Swal.fire({
        icon: "error",
        title: "Error de conversion",
        text: "La moneda ingresada no es convertible actualmente",
    });
}
//-------------------------------------------------------

//Enlace a inputs SALARIO
let inputMontoSalario = document.getElementById("inputMontoSalario")
let inputMonedaSalario = document.getElementById("inputMonedaSalario") 
let inputMesLiquidado = document.getElementById("inputMesSalario")
//Enlace al boton AGREGAR SALARIO
let botonAgregarSalario = document.getElementById("botonAgregarSalario")
//Enlace a div donde se inyectan los resultados
let lineaDatosCargadosSalarios = document.getElementById("datosCargadosSalario")
let lineaTotalSalario = document.getElementById("salarioTotal")

//localStorage.clear()

//Funciones de los salarios
async function crearSalario () {
    let montoAlmacenado = parseFloat(inputMontoSalario.value)
    let monedaAlmacenada = inputMonedaSalario.value
    let mesAlmacenado = inputMesLiquidado.value

    let montoPesificado = await montoConvertido(montoAlmacenado, monedaAlmacenada)

    if(typeof montoPesificado === "number"){
        const salario = new Salario (montoPesificado, monedaAlmacenada, mesAlmacenado)
    
        salarios.push(salario)
    
        salarios.forEach((salario, index) => {
            if(index === salarios.length-1){
                let salarioIngresado = document.createElement("div")
                salarioIngresado.className = "lineaResultado"
                salarioIngresado.innerHTML =`<span>${salario.id}</span>
                                            <span>${salario.monto}</span>
                                            <span>${salario.moneda}</span>
                                            <span>${salario.mesLiquidado}</span>`
                lineaDatosCargadosSalarios.appendChild(salarioIngresado)
            }
        })
        const cashTotalSalario = montoFinal(salarios)
        cashSalarios.unshift(cashTotalSalario)
        cargarArrayIngresos(salarios)
    }
}

//-------------------------------------------------------

//Enlace a inputs INVERSIONES
let inputCapitalInvertido = document.getElementById("inputCapitalInvertido")
let inputMonedaInvertida = document.getElementById("inputMonedaInvertida")
let inputVariacionInversion = document.getElementById("inputVariacionInversion")
//Enlace al boton AGREGAR INVERSION 
let botonAgregarInversion = document.getElementById("botonAgregarInversion")
//Enlace a div donde se inyectan los resultados
let lineaDatosCargadosInversiones = document.getElementById("datosCargadosInversiones")
let lineaTotalInversion = document.getElementById("inversionTotal")

async function crearInversion () {
    let capitalInvertido = parseFloat(inputCapitalInvertido.value)
    let monedaInvertida = inputMonedaInvertida.value
    let variacionInversion = parseFloat(inputVariacionInversion.value)

    let resultadoNeto = await convertirInversion(monedaInvertida, capitalInvertido, variacionInversion)

    if(typeof resultadoNeto === "number"){
        const inversion = new Inversion (capitalInvertido, monedaInvertida, variacionInversion, resultadoNeto)
    
        inversiones.push(inversion)

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
        const cashTotalInversion = resultadoNetoFinal(inversiones)
        cashInversiones.unshift(cashTotalInversion)
        cargarArrayIngresos(inversiones)
    }
}

//-------------------------------------------------------

//Enlace a inputs EMPRENDIMIENTOS
let inputRubro = document.getElementById("inputRubroEmprendimiento")
let inputBalanceEmprendimiento = document.getElementById("inputBalanceEmprendimiento")
let inputMonedaEmprendimiento = document.getElementById("inputMonedaEmprendimiento")
//Enlace a boton agregar emprendimiento
let botonAgregarEmprendimiento = document.getElementById("botonAgregarEmprendimiento")
//Enlace a div donde se inyectan los resultados
let datosCargadosEmprendimientos = document.getElementById("datosCargadosEmprendimientos")
let lineaTotalEmprendimiento = document.getElementById("balanceTotal")

async function crearEmprendimiento () {
    let rubroAlmacenado = inputRubro.value
    let balanceEmprendimientoAlmacenado = parseFloat(inputBalanceEmprendimiento.value)
    let monedaAlmacenada = inputMonedaEmprendimiento.value

    let balancePesificado = await montoConvertido(balanceEmprendimientoAlmacenado, monedaAlmacenada)

    if (typeof balancePesificado === "number"){
        const emprendimiento = new Emprendimiento (rubroAlmacenado, balancePesificado, monedaAlmacenada)
        
        emprendimientos.push(emprendimiento)

        emprendimientos.forEach((emprendimiento, index) => {
            if(index === emprendimientos.length-1){
                let resultados = document.createElement("div")
                resultados.className = "lineaResultado"
                resultados.innerHTML = `<span>${emprendimiento.id}</span>
                                        <span>${emprendimiento.actividad}</span>
                                        <span>${emprendimiento.resultadoNeto}</span>
                                        <span>${emprendimiento.moneda}</span>`
                datosCargadosEmprendimientos.appendChild(resultados)
            }
        })
        const cashTotalEmprendimiento =  resultadoNetoFinal(emprendimientos)
        cashEmprendimientos.unshift(cashTotalEmprendimiento)
        cargarArrayIngresos(emprendimientos)
    }

}
//-------------------------------------------------------
botonAgregarInversion.addEventListener("click", crearInversion)
botonAgregarSalario.addEventListener("click", crearSalario)
botonAgregarEmprendimiento.addEventListener("click", crearEmprendimiento)
//-------------------------------------------------------
//Enlaces a los INPUTS | EGRESOS-FACTURAS
let inputServicio = document.getElementById("inputServicio")
let inputMontoFactura = document.getElementById("inputMontoFactura" )
let inputVencimientoFactura = document.getElementById("inputVencimientoFactura")
//Enlace al boton AGREGAR FACTURA
let botonAgregarFactura = document.getElementById("botonAgregarFactura")
//Enlace a div donde se inyectan los resultados
let lineaDatosCargadosFacturas = document.getElementById("datosCargadosFactura")
let lineaTotalFacturas = document.getElementById("facturaTotal")

//Funcion crear facturas

const crearFactura = () => {
    let servicioAlmacenado = inputServicio.value 
    let montoAlmacenado = parseFloat(inputMontoFactura.value)
    let vencimientoAlmacenado = inputVencimientoFactura.value

    const factura = new Factura (servicioAlmacenado, montoAlmacenado, vencimientoAlmacenado)

    facturas.push(factura)

    facturas.forEach((factura, index) => {
        if(index === facturas.length-1){
            let facturaIngresada = document.createElement("div")
            facturaIngresada.className = "lineaResultado"
            facturaIngresada.innerHTML =    `<span>${factura.id}</span>
                                            <span>${factura.servicio}</span>
                                            <span>${factura.monto}</span>
                                            <span>${factura.vencimiento}</span>`
            lineaDatosCargadosFacturas.appendChild(facturaIngresada)
        }
    })
    const cashTotalFactura = montoFinal(facturas)
    cashFacturas.unshift(cashTotalFactura)
    cargarArrayEgresos(facturas)
}

//-------------------------------------------------------
//Enlaces a los INPUTS | EGRESOS-CREDITOS
let inputMontoDeuda = document.getElementById("inputCredito")
let inputAcreedor = document.getElementById("inputAcreedor")
let inputVencimientoDeuda = document.getElementById("inputVencimientoCredito")
//Enlace al boton AGREGAR CREDITO
let botonAgregarCredito = document.getElementById("botonAgregarCredito")
//Enlace a divs donde se inyecta el HTML
let lineaDatosCargadosCreditos = document.getElementById("datosCargadosCreditos")
let lineaTotalCredito = document.getElementById("deudaTotal")

//Funcion Crear Credito

function crearCredito () {
    let montoDeuda = parseFloat(inputMontoDeuda.value)
    let acreedor = inputAcreedor.value
    let vencimientoCredito = inputVencimientoDeuda.value

    const credito = new Credito (montoDeuda, acreedor, vencimientoCredito)
    
    creditos.push(credito)

    creditos.forEach((credito, index) => {
        if(index === creditos.length-1){
            let creditoIngresado = document.createElement("div")
            creditoIngresado.className = "lineaResultado"
            creditoIngresado.innerHTML = `<span>${credito.id}</span>
                                          <span>${credito.monto}</span>
                                          <span>${credito.entidad}</span>
                                          <span>${credito.vencimiento}</span>`
            lineaDatosCargadosCreditos.appendChild(creditoIngresado)
        }
    })
    const cashTotalCredito = montoFinal(creditos)
    cashCreditos.unshift(cashTotalCredito)
    cargarArrayEgresos(creditos)
}

botonAgregarFactura.addEventListener("click", crearFactura)
botonAgregarCredito.addEventListener("click", crearCredito)

//Eventos para guardar INGRESOS totales | CLICK

let ingresoFinal = document.getElementById("ingreso-total")
let guardarIngreso = document.getElementById("guardar-ingresos")

guardarIngreso.onclick = () => {
    const totalSalarios = cashSalarios[0]
    const totalInversiones = cashInversiones[0]
    const totalEmprendimientos = cashEmprendimientos[0]

    const resultado = totalSalarios+totalInversiones+totalEmprendimientos

    const casilleroIngresoTotal = document.createElement("div")
    casilleroIngresoTotal.className = "if"
    casilleroIngresoTotal.innerHTML = `$${resultado}`
    ingresoFinal.appendChild(casilleroIngresoTotal)

    limpiarDatosIngresos()

    saveAlert()
}

//Eventos para guardar EGRESOS totales | CLICK

let egresoFinal = document.getElementById("egreso-total")
let guardarEgreso = document.getElementById("guardar-egresos")

guardarEgreso.onclick = () => {
    const totalFacturas = cashFacturas[0]
    const totalCreditos = cashCreditos[0]

    const resultado = totalFacturas+totalCreditos

    const casilleroEgresoTotal = document.createElement("div")
    casilleroEgresoTotal.className = "ef"
    casilleroEgresoTotal.innerHTML = `$${resultado}`
    egresoFinal.appendChild(casilleroEgresoTotal)

    limpiarDatosEgresos()

    saveAlert()
}