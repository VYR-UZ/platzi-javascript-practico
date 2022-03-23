const cupones = [
            { nombre: "15%off", valor: 15},
            { nombre: "20%off", valor: 20},
            { nombre: "35%off", valor: 35},
    ];

function calcularPrecioDescuento(precio, porcentaje){
    const descuento = (precio * porcentaje) / 100;
    const precioConDescuento = precio - descuento;

    return precioConDescuento;
}


function executeCalculation() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    /*Compara que el valor tomado en el input texto
     del array cupones .nombre*/
    const cuponesValidos = function(cupones) {
        return cupones.nombre === couponValue;
    };

    /** valida si exite para regresarlo */
    const cuponesArray = cupones.find(cuponesValidos);
    
    if (!cuponesArray ) {
        console.log("El cupón " + couponValue + " no es válido");
    } else {

        /** valida si exite ,valor en el array cupones para regresarlo */
        const cuponDescount = cuponesArray.valor;
        const calcuPriceDesc= calcularPrecioDescuento(priceValue, cuponDescount);

        const resultPriceDesc = document.getElementById("resultPrice");

        resultPriceDesc.innerText = `Total apagar con descuento aplicado: $${calcuPriceDesc} MXN`;

        console.log(calcuPriceDesc);
    }
}