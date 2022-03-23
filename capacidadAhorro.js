/* 
    CE = capacidad de endeudamiento
    CA = capacidad de ahorro
    IT = igresos totales
    GF = gastos fijos
    30% hasta 40%: esa cifra representa, dinero que tienes disponible para gastar después de cubrir tus gastos obligatorios.
*/
/* Formulas */
//  CE = (IT - GF) * 0.30
//  CA = (IT - GF) - CE

/*
const ingresosTotales = 13000;
console.log("Ingresos totales: "
            + ingresosTotales
            + " MXN");

const gastosFijos = 10280;
console.log("Gastos fijos: "
            + gastosFijos
            + " MXN");

const capacidadEndeudamiento = (ingresosTotales - gastosFijos) * 0.35
console.log("Capacidad de endeudamiento: "
            + capacidadEndeudamiento
            + " MXN");     
*/

/*
const resultadoIT_GT = ingresosTotales - gastosFijos;
console.log("Resultado IT menos GT: "
            + resultadoIT_GT
            + " MXN");

const capacidadAhorro = resultadoIT_GT - capacidadEndeudamiento;
console.log("Capacidad de ahorro: "
            + capacidadAhorro
            + " MXN");
*/

function capacidadEndeudamiento(ingresosTotales, gastosFijos) {
    return (parseInt(ingresosTotales) - parseInt(gastosFijos) ) * 0.35;
}

function capacidadAhorro(ingresosTotales, gastosFijos) {
    const endeudamiento = capacidadEndeudamiento(ingresosTotales, gastosFijos);
    return (parseInt(ingresosTotales) - parseInt(gastosFijos)) - endeudamiento;
}


/** Funciones interactuar con html */

function executeEndeudamientoAhorro() {
    const inputIngresos = document.getElementById('inputIngresos');
    const ingresosValue = inputIngresos.value;
    /*console.log(ingresosValue);*/

    const inputGastos = document.getElementById('inputGastos');
    const gastosValue = inputGastos.value;
    /*console.log(gastosValue);*/

    const resultadoEndeudamiento = capacidadEndeudamiento(ingresosValue, gastosValue);

    const resultadoAhorro = capacidadAhorro(ingresosValue, gastosValue);

    const showEndeudamiento = document.getElementById('endeudamiento');
    showEndeudamiento.innerText = `Capacidad de Endeudamiento: ${resultadoEndeudamiento}`;

    const showAhorro = document.getElementById('ahorro');
    showAhorro.innerText = `Capacidad de Ahorro: ${resultadoAhorro}`;    

    console.log(resultadoEndeudamiento);
    console.log(resultadoAhorro);
}



