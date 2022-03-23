//calcular mediana de los salarios
//Helpers
function par(salarioLista) {
    return (salarioLista % 2 === 0); 
 }

//Crear un array que solo tenga los salarios
const salariosColombia = colombia.map(
    //esta funcion itera en cada uno de los elementos del array de colombia
    function (persona) {
        return persona.salary;
    }
);

//Ordenar el nuevo array con los salarios
const salariosColSort = salariosColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


 //Calcular media aritmetica, que se ejecutara si es par
function calcularMediaSalarios(lista) {  
    const sumaLista = lista.reduce(
        function (acumulado = 0, nuevo) {
            return acumulado + nuevo;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

 function calcularMedianaSalarios(lista){
    const mitadListaSalarios = parseInt(lista.length / 2);

    if (par(lista.length)) {
        const mitadSalariosListaUno = lista[mitadListaSalarios - 1] ;
        const mitadSalariosListaDos = lista[mitadListaSalarios];

        const promedioListaSalarios = calcularMediaSalarios([mitadSalariosListaUno, mitadSalariosListaDos]);

        return promedioListaSalarios;

    } else{
        const mitadSalariosLista = lista[parseInt(mitadListaSalarios)];
        return mitadSalariosLista;
    }
}

const medianaGeneralSalarios = calcularMedianaSalarios(salariosColSort);

//Mediana Top 10% de salarios
//100 - 10 = 90 
const spliceStar = (salariosColSort.length * 90) / 100;
const spliceCount = salariosColSort.length  - spliceStar;

const top10Salarios = salariosColSort.splice(spliceStar, spliceCount);

const medianaTop10Salarios = calcularMedianaSalarios(top10Salarios);

console.log({
    medianaGeneralSalarios,
    medianaTop10Salarios
});






