/*
const precioInicial = 9999;
const porcentajeDescuento = 20;

const descuento = (precioInicial * porcentajeDescuento) / 100;

const precioFinal = precioInicial - descuento;
console.log({
    precioInicial,
    porcentajeDescuento,
    descuento,
    precioFinal
});
*/

function calcularPrecioDescuento(precio, porcentaje){
    const descuento = (precio * porcentaje) / 100;
    const precioConDescuento = precio - descuento;

    /*console.log({
        precio,
        descuento,
        precioConDescuento
    });*/

    return precioConDescuento;
}

function executeCalculation() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDescount = document.getElementById("inputDescount");
    const descountValue = inputDescount.value;

    const calcuPriceDesc= calcularPrecioDescuento(priceValue, descountValue);

    const resultPriceDesc = document.getElementById("resultPrice");

    resultPriceDesc.innerText = `Total apagar con descuento aplicado: $${calcuPriceDesc} MXN`;

    console.log(calcuPriceDesc);
}