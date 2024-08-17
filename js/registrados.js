//Recuperos del storage
let recuperoIngresoSalario = JSON.parse(localStorage.getItem("ingreso-salarios"))
let recuperoIngresoInversion = JSON.parse(localStorage.getItem("ingreso-inversiones"))
let recuperoIngresoEmprendimiento = JSON.parse(localStorage.getItem("ingreso-emprendimientos"))
let recuperoEgresoFactura = JSON.parse(localStorage.getItem("egreso-facturas"))
let recuperoEgresoCredito = JSON.parse(localStorage.getItem("egreso-creditos"))

let recuperoCashSalario = JSON.parse(localStorage.getItem("cash-salarios"))
let recuperoCashInversion = JSON.parse(localStorage.getItem("cash-inversiones"))
let recuperoCashEmprendimiento = JSON.parse(localStorage.getItem("cash-emprendimientos"))
let recuperoCashFactura = JSON.parse(localStorage.getItem("cash-facturas"))
let recuperoCashCreditos = JSON.parse(localStorage.getItem("cash-creditos"))

//Enlaces
let salariosAlmacenados = document.getElementById("salariosIngresados")
let inversionesAlmacenadas = document.getElementById("inversionesIngresadas")
let emprendimientosAlmacenados = document.getElementById("emprendimientosIngresados") 
let facturasAlmacenadas = document.getElementById("facturasIngresadas")
let creditosAlmacenados = document.getElementById("deudasIngresadas") 

function renderSalarios (array) {
    array.forEach((salario) => {
        let lineaRegistrada = document.createElement("div")
        lineaRegistrada.className = "linea-registrada"
        lineaRegistrada.innerHTML =`<span>${salario.monto}</span>
                                    <span>${salario.moneda}</span>
                                    <span>${salario.mesLiquidado}</span>`
        salariosAlmacenados.appendChild(lineaRegistrada)
    })
}

function renderInversiones (array) {
    array.forEach((inversion) => {
        let lineaRegistrada = document.createElement("div")
        lineaRegistrada.className = "linea-registrada"
        lineaRegistrada.innerHTML =`<span>${inversion.montoInvertido}</span>
                                    <span>${inversion.moneda}</span>
                                    <span>${inversion.porcentaje}</span>
                                    <span>${inversion.resultadoNeto}</span>`
        inversionesAlmacenadas.appendChild(lineaRegistrada)
    })
}

function renderEmprendimientos (array) {
    array.forEach((emprendimiento) => {
        let lineaRegistrada = document.createElement("div")
        lineaRegistrada.className = "linea-registrada"
        lineaRegistrada.innerHTML =`<span>${emprendimiento.actividad}</span>
                                    <span>${emprendimiento.resultadoNeto}</span>
                                    <span>${emprendimiento.moneda}</span>`
        emprendimientosAlmacenados.appendChild(lineaRegistrada)
    })
}

function renderFacturas (array) {
    array.forEach((factura) => {
        let lineaRegistrada = document.createElement("div")
        lineaRegistrada.className = "linea-registrada"
        lineaRegistrada.innerHTML =`<span>${factura.servicio}</span>
                                    <span>${factura.monto}</span>
                                    <span>${factura.vencimiento}</span>`
        facturasAlmacenadas.appendChild(lineaRegistrada)
    })
}

function renderCreditos (array) {
    array.forEach((credito) => {
        let lineaRegistrada = document.createElement("div")
        lineaRegistrada.className = "linea-registrada"
        lineaRegistrada.innerHTML =`<span>${credito.monto}</span>
                                    <span>${credito.entidad}</span>
                                    <span>${credito.vencimiento}</span>`
        creditosAlmacenados.appendChild(lineaRegistrada)
    })
}

function Inicio () {
    setTimeout(()=>{
        renderSalarios(recuperoIngresoSalario)
        renderInversiones(recuperoIngresoInversion)
        renderEmprendimientos(recuperoIngresoEmprendimiento)
        renderFacturas(recuperoEgresoFactura)
        renderCreditos(recuperoEgresoCredito)
    }, 500)
}

let botonReset = document.getElementById("btn-reiniciar")

function reset() {
    localStorage.clear()

    salariosAlmacenados.innerHTML = ``
    inversionesAlmacenadas.innerHTML = ``
    emprendimientosAlmacenados.innerHTML = ``
    facturasAlmacenadas.innerHTML = ``
    creditosAlmacenados.innerHTML = ``

    recuperoCashSalario = []
    recuperoCashInversion = []
    recuperoCashEmprendimiento = []
    recuperoCashFactura = []
    recuperoCashCreditos = []
}

botonReset.addEventListener("click", reset)

Inicio()
