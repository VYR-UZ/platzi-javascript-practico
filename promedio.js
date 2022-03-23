/** PROMEDIO */

//Lista en un array, se debe agregar valores numericos.
function calcularMediaAritmetica(lista) { 
    /* let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    } */ 
    
    const sumaLista = lista.reduce(
        function (acumulado = 0, nuevo) {
            return acumulado + nuevo;
        }
    );

    const promedio = sumaLista / lista.length;

    return promedio;
}


/** MEDIANA */
//const listaMediana = [9999, 500, 200, 100];

function calcularMedianaAritmetica(listaMediana){
    const orderList = listaMediana.sort(function(a,b) {
        return a-b; 
     });
     console.log(orderList);

    const mitadListaMediana = parseInt(listaMediana.length / 2);

    function par(numeroLista) {
        if (numeroLista % 2 === 0) {
            return true;
        } else{
            return false
        }
    }

    let medianaAritmetica;

    if (par(listaMediana.length)) {
        const espacioUno = listaMediana[mitadListaMediana - 1] ;
        const espacioDos = listaMediana[mitadListaMediana ];

        const promedioMedianaAritmetica = calcularMediaAritmetica([espacioUno, espacioDos]);

        return medianaAritmetica = promedioMedianaAritmetica;

    } else{
        return medianaAritmetica = listaMediana[parseInt(mitadListaMediana)];
    }
}

/** MODA */
//const listaModa = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

function calcularModa(listaModa) {
//convertir el array en objeto
//crear un objeto vacio.
const listaModaCount = {};

//recorrer y sumar el elemento del array
listaModa.map(
    function (elemento) {
        if (listaModaCount[elemento]) {
            //listaModaCount[elemento] = listaModaCount[elemento] + 1;
        listaModaCount[elemento] += 1;
        } else{
            listaModaCount[elemento] = 1;
        }
    }
);

//Convertir el objeto en array.
//ver cual es el elmento mas grande
//object.entries(); se puede enviar como argumento el objeto
//Usa function sort(); para ordenar el arreglo
const listaModaArray = Object.entries(listaModaCount).sort(
    //funcion anonima
    function (a,b) {
        //Ordenar de menos repeticiones a mas repeticiones
        //se ordenar apartir de la segunda posicion
        return a[1] - b[1];
    }
);

const moda = listaModaArray[listaModaArray.length -1];
console.log(moda);   
}


/** PONDERADO */

/*const listaPonderada = [
    {
        course: "Programacion con JS",
        note: 8,
        credit: 6,
    },
    {
        course: "Diseño web",
        note: 9,
        credit: 4,
    },
    {
        course: "Administracion de proyectos",
        note: 6.5,
        credit: 4.5,
    }
];*/

function calcularPonderado(listaPonderada) {
//Se multiplica la calificacion por el credito
const noteWithCredit = listaPonderada.map(
    function (ponderadoObjects) {
        return ponderadoObjects.note * ponderadoObjects.credit;
    }
);

//Sumar los elementos del nuevo array que se creo 'map()'
const sumeOfNoteWithCredit = noteWithCredit.reduce(
    function (sumar = 0, nuevoValor) {
        return sumar + nuevoValor;
    }
);

//sumar los creditos de las materias
const noteCredit = listaPonderada.map(
    function (ponderadoObject) {
        return ponderadoObject.credit
    }
);

const sumeOfCredit = noteCredit.reduce(
    function (sumar = 0, nuevoValor) {
        return sumar + nuevoValor;
    }
);

// Dividir [(n1+c1)] + n... / (c1 + n...)
const promedioGeneral = sumeOfNoteWithCredit/sumeOfCredit;   
}


/** Funciones integrar Javascript en HTML */

function calcPro() {
    const input = document.getElementById('inputPromedio');
    const elementos = input.value;

    const elementArray =  elementos.split(',').map(x => +x);
    console.log(elementArray);

    const promedioAritmetica = calcularMediaAritmetica(elementArray);
    console.log(promedioAritmetica);

    const showPromedio = document.getElementById('promedioAritmetica');
    showPromedio.innerHTML = `Media Aritmetica: ${promedioAritmetica}`;
}

function calcMediana() {
    const input = document.getElementById('inputMediana');
    const elementos = input.value;

    //.split(','): separa el elemento indicado
    const elementosArray = elementos.split(',').map(x => +x);
    console.log(elementosArray);
 
    const medianaAritmetica = calcularMedianaAritmetica(elementosArray);
    console.log(medianaAritmetica);

    const showMediana = document.getElementById('mediana');
    showMediana.innerHTML = `Mediana: ${medianaAritmetica}`;
}

function calcModa(){
    const input = document.getElementById('inputModa');
    const elementos = input.value;

    const elementosArray = elementos.split(',').map(x => +x);
    console.log(elementosArray);

    const modaAritmetica = calcularModa(elementosArray);
    console.log(modaAritmetica);

    const showModa = document.getElementById('moda');
    showModa.innerHTML = `Moda: ${modaAritmetica}`;
}



/*function calcPonderado() {
    const input = document.getElementById('inputFor');
    const elementos = input.value;

    const inputdos = document.getElementById('inputPonderado');
    const elementoOjeto = inputdos.value;
    console.log(elementos + " " +  elementoOjeto);

    function materias(nombre, note, credit) {
        this.nombre = nombre;
        this.note = note;
        this.credit = credit;
    }

    for (let i = 0; i < elementos; i++) {
        return elementos;
      
    }    
}*/