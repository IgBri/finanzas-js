alert("Bienvenido al proyecto de Ignacio")

const modalidad = parseInt(prompt("Este proyecto te ofrece la posibilidad de utilizar dos modalidades. Para utilizar el modo de Finanzas Personales, escribe el numero 1. Si quieres utilizar el modo de Analisis y Trade de Criptoactivos, escribe el numero 2"))

if (modalidad==1){
    alert("Bienvenido a la modalidad de Finanzas Personales")
    console.log("Bienvenido a la modalidad de Finanzas Personales")
    //Array
    let ingresos = [] 
    let gastos = []
    //Variables
    let ingreso = 0
    let gasto = 0

    const preguntaIngresos = confirm("¿Tenes varias fuentes de ingresos?")

    if (preguntaIngresos==true){
        const cantidadIngresos = parseInt(prompt("¿Cuantas fuentes de ingresos tiene?"))
        for(let i=0;i<cantidadIngresos;i++){
            ingreso = parseInt(prompt("Indique el monto del ingreso"))
            ingresos.push(ingreso)
            let tipoIngreso = prompt("Considerando que estamos analizando las siguientes partidas ¿A que tipo de ingreso corresponde el recien ingresado?: \n 1- Salario \n 2- Inversiones \n 3- Emprendimiento")
            switch (tipoIngreso){
                case "salario":
                    alert("El monto ingresado corresponde a "+tipoIngreso)
                    break
                case "emprendimiento":
                    alert("El monto ingresado corresponde a "+tipoIngreso)
                    break
                case "inversiones":
                    alert("El monto ingresado corresponde a "+tipoIngreso)
                    break
                default:
                    alert("El tipo de ingreso mencionado no corresponde a una partida analizable aqui")
            }
        }
        console.log(ingresos)
    }else{
        salario = parseInt(prompt("Ingresa aqui la cantidad de dinero que percibis mensualmente"))

        ingresosTotales=salario

        alert("Tus ingresos totales son de $"+ingresosTotales)
        console.log("Tus ingresos totales son de $"+ingresosTotales)
    }
    
}else if (modalidad==2){
    alert("Bienvenido a la modalidad de Analisis y Trade de Criptoactivos")
    console.log("Bienvenido a la modalidad de Analisis y Trade de Criptoactivos")
    //Variables
    let precio = 0
    let precioBtc = 70000
    let precioEth = 3800
    let precioSol = 160
    let accion = 0
    //array
    let criptomonedas = []
    //Funcion
    function añadirCripto(){
        criptomonedas.push(cripto)
    }
    function variacionPorcentual(precioInicial, cantidadVariacion){
        let vPorcentual=(cantidadVariacion*100)/precioInicial;
        return vPorcentual;
    }
    function variacionCash(precioInicial, porcentajeVariacion){
        let vCash=(porcentajeVariacion*precioInicial)/100;
        return vCash;
    }

    alert("Actualmente contamos con tres criptomonedas para analizar. Elegi una: \n 1- Bitcoin \n 2- Ethereum \n 3- Solana")
    console.log("Actualmente contamos con tres criptomonedas para analizar. Elegi una: \n 1- Bitcoin \n 2- Ethereum \n 3- Solana")
    let cripto = prompt("¿Que criptomoneda te gustaria analizar?")
    switch(cripto){
        case "bitcoin":
            precio = precioBtc
            alert("El precio actual de "+cripto+" es de U$D "+precioBtc)
            añadirCripto()
            alert("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            console.log("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            accion = parseInt(prompt("Elegi que tipo de accion queres ejecutar: \n 1- Calcular su variacion porcentual del precio \n 2- Calcular la variacion en cash del precio respecto a su porcentaje de variacion"))
            switch(accion){
                case 1:
                    let vCantidad=parseInt(prompt("¿De cuanto fue la variacion en el precio del activo en terminos de cash? Ejemplo: El activo aumento U$S5.000"));
                    let porcentaje = variacionPorcentual(precio, vCantidad)
                    alert("El precio de Bitcoin vario "+porcentaje+" %")
                    console.log("El precio de Bitcoin vario "+porcentaje+" %")
                    break
                case 2:
                    let vPorcentaje=parseInt(prompt("¿De cuanto fue la variacion porcentual del precio del activo?"))
                    let cash=variacionCash(precio, vPorcentaje)
                    alert("El precio de Bitcoin vario "+cash+" U$D")
                    console.log("El precio de Bitcoin vario "+cash+" U$D")
                    break
                default:
                    alert("Esta accion no es valida")
                    console.log("Esta accion no es valida")
            }
            break
        case "ethereum":
            precio = precioEth
            alert("El precio actual de "+cripto+" es de U$D "+precioEth)
            añadirCripto()
            alert("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            console.log("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            accion = parseInt(prompt("Elegi que tipo de accion queres ejecutar: \n 1- Calcular su variacion porcentual del precio \n 2- Calcular la variacion en cash del precio respecto a su porcentaje de variacion"))
            switch(accion){
                case 1:
                    let vCantidad=parseInt(prompt("¿De cuanto fue la variacion en el precio del activo en terminos de cash? Ejemplo: El activo aumento U$S5.000"));
                    let porcentaje = variacionPorcentual(precio, vCantidad)
                    alert("El precio de Ethereum vario "+porcentaje+" %")
                    console.log("El precio de Ethereum vario "+porcentaje+" %")
                    break
                case 2:
                    let vPorcentaje=parseInt(prompt("¿De cuanto fue la variacion porcentual del precio del activo?"))
                    let cash=variacionCash(precio, vPorcentaje)
                    alert("El precio de Ethereum vario "+cash+" U$D")
                    console.log("El precio de Ethereum vario "+cash+" U$D")
                    break
                default:
                    alert("Esta accion no es valida")
                    console.log("Esta accion no es valida")
            }
            break
        case "solana":
            precio = precioSol
            alert("El precio actual de "+cripto+" es de U$D "+precioSol)
            añadirCripto()
            alert("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            console.log("Ahora que seleccionaste la criptomoneda "+cripto+" podes determinar su variacion porcentual, o su variacion en cash respecto al movimiento del precio en el mercado")
            accion = parseInt(prompt("Elegi que tipo de accion queres ejecutar: \n 1- Calcular su variacion porcentual del precio \n 2- Calcular la variacion en cash del precio respecto a su porcentaje de variacion"))
            switch(accion){
                case 1:
                    let vCantidad=parseInt(prompt("¿De cuanto fue la variacion en el precio del activo en terminos de cash? Ejemplo: El activo aumento U$S5.000"));
                    let porcentaje = variacionPorcentual(precio, vCantidad)
                    alert("El precio de Solana vario "+porcentaje+" %")
                    console.log("El precio de Solana vario "+porcentaje+" %")
                    break
                case 2:
                    let vPorcentaje=parseInt(prompt("¿De cuanto fue la variacion porcentual del precio del activo?"))
                    let cash=variacionCash(precio, vPorcentaje)
                    alert("El precio de Solana vario "+cash+" U$D")
                    console.log("El precio de Solana vario "+cash+" U$D")
                    break
                default:
                    alert("Esta accion no es valida")
                    console.log("Esta accion no es valida")
            }
            break
        default:
            alert("Esa criptomoneda no se encuentra actuallmente en este proyecto")
    }
    console.log("Espero que te haya servido el analisis sobre "+criptomonedas)
    alert("Espero que te haya servido el analisis sobre "+criptomonedas)
}else {
    alert("La opcion seleccionada no corresponde a este proyecto")
    console.log("La opcion seleccionada no corresponde a este proyecto")
}

