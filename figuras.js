//Cuadrado
console.group("Cuadrados");

function perimetroCu(lado){
    return lado * 4; 
}

function areaCu(lado){
    return lado * lado;
}

console.groupEnd();


//Triangulo
console.group("Triangulos");

function perimetroTri(ladoTri, ladoTriDos, baseTri){
    return parseInt(ladoTri) + parseInt(ladoTriDos) + parseInt(baseTri);
}

function areaTri(baseTri, alturaTri){
    return (baseTri * alturaTri) / 2
}

console.groupEnd();


//Circulo
console.group("Circulos");

function diametroCi(radio) {
    return radio * 2;
}

const PI = Math.PI; //Herramienta Math
console.log("PI vale: " + PI);

function perimetroCi(radio){
    //Se manda a llamar a la funcion creada dentro de esta funcion
    const diametro = diametroCi(radio); 
    return diametro * PI;
};

function areaCi(radio){
    return (radio * radio) * PI;
};

console.groupEnd();

//Triangulo Isosceles
console.group();
/**
 * Raiz-cuadrada:
 Math.sqrt(9); // 3

function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}
 */

function trianguloIsoscelesH(ladoUno, ladoDos, base) {
    if (ladoUno != ladoDos) {
        console.error("no es isosceles");
    } else if (ladoUno === ladoDos && ladoUno != base || ladoDos != base ){
        let lados = ladoUno * ladoDos;
        let baseTri = (base * base) / 4;
        let resta = lados - baseTri;
        let h = Math.sqrt(resta);

        console.log("h: " + h);
    } 
}
trianguloIsoscelesH(12, 12, 10);

console.groupEnd();


//Funciones para interactuar con HTML
function calcuPerimetroCu(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCu(value)
    console.log(perimetro);
}

function calcuAreaCu(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCu(value);
    console.log(area);
}

function calcuPerimetroTri(){
    const input = document.getElementById("inputTriangulo");
    const valueLado = input.value;

    const inputLadoDos = document.getElementById("inputTrianguloDos");
    const valueLadoDos = inputLadoDos.value;

    const inputBase = document.getElementById("inputTrianguloBase");
    const base = inputBase.value;

    const perimetroTriangulo = perimetroTri(valueLado, valueLadoDos, base)
    console.log(perimetroTriangulo);
}

function calcuAreaTri(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = inputBase.value;

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const altura = inputAltura.value;

    const areaTriangulo = areaTri(base, altura);
    console.log(areaTriangulo);
}

function calcuPerimetroCi() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    console.log("Radio: " + radio);

    const diametroCirculo = diametroCi(radio);
    console.log("Diametro: " + diametroCirculo);

    const perimetroCirculo = perimetroCi(radio);
    console.log("Perimetro: " + perimetroCirculo);
}

function calcuAreaCi() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    console.log("Radio: " + radio);

    const areaCirculo = areaCi(radio);
    console.log("Area: " + areaCirculo);
}