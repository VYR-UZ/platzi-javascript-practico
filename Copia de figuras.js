//Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(
    "Los lados del cuadrado miden: " 
    + ladoCuadrado 
    + "cm"
);

const perimetroCu = ladoCuadrado * 4; 
console.log(
    "El perimetro del cuadrado es: " 
    + perimetroCu 
    + "cm"
);

const areaCu = ladoCuadrado * ladoCuadrado;
console.log(
    "El area del cuadrado es: " 
    + areaCu 
    + "cm^2"
);
console.groupEnd();

//Triangulo
console.group("Triangulos");
const ladoTri = 4;
const ladoTriDos = 4;
const baseTri = 5.5;
const alturaTri = 6.5;
console.log(
    "Los lados del triangulo son: " 
    + baseTri 
    + "cm, "
    + ladoTri 
    + "cm, "
    + ladoTriDos 
    + "cm, y la altura de: "
    + alturaTri 
    + "cm" 
);

const perimetroTri = ladoTri + ladoTriDos + baseTri;
console.log(
    "El perimetro del triangulo es: " 
    + perimetroTri 
    + "cm"
);

const areaTri = (baseTri * alturaTri) / 2;
console.log(
    "El area del triangulo es: "
    + areaTri
    + "cm^2"
);
console.groupEnd();

//Circulo
console.group("Circulos");
const radioCi = 4;
console.log(
    "El radio es: "
    + radioCi
    + "cm"    
);

const diametroCi = radioCi * 2;
console.log(
    "El diametro es: "
    + diametroCi
    + "cm"
);

const PI = Math.PI; //Herramienta Math
console.log("PI vale: " + PI);

const perimetroCi = diametroCi * PI;
console.log(
    "El perimetro del circulo es: "
    + perimetroCi
    + "cm"
);

const areaCi = (radioCi * radioCi) * PI;
console.log(
    "El area del circulo es: "
    + areaCi 
    + "cm^2"
);
console.groupEnd();
