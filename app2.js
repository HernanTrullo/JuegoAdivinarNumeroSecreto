// Se defininen las funcines
function mostrarLenguajesDeProgramacion(lenguajes){
    for (let i=0; i<lenguajes.length; i++){
        console.log(lenguajes[i]);
    }
}
function mostrarLenguajesDeProgramacionInverso(lenguajes){
    for (let i=lenguajes.length; i>-1; i--){
        console.log(lenguajes[i]);
    }
}
function calcularPromedio(listaNumeros){
    let promedio = 0;
    for (let i=0; i<listaNumeros.length; i++){
        promedio+= listaNumeros[i];
    }
    return promedio
}

function retornarGrandePequenoListaNumeros(lista){
    lista.sort(function(a,b){
        return a - b;
    });
    console.log(`El número mas pequeño es: ${lista[0]}`);
    console.log(`El número mas pequeño es: ${lista[lista.length-1]}`);
}

function sumarNumerosLista(lista){
    let suma = lista.reduce(function(acum, value){
        return acum + value;
    }, 0)
    console.log(`La suma de los numeros es: ${suma}`);
}
function encontrarNumeroLista(lista, numero){
    let position = -1;
    for (let i=0; i<lista.length; i++){
        if(lista[i] == numero){
            position = i;
            break;
        }
    }
    console.log(`El indice de la lista es: ${position}`)
}

function sumarNumerosListas (lista1, lista2){
    if (lista1.length == lista2.length){
        let listaNueva = lista1.map((value, indice)=> value + lista2[indice]);
        console.log(listaNueva);
    }else{
        console.log("La lista debe ser de tamaño igual")
    }
}
function cuadradoNumeroLista(lista){
    let lista1 = lista.map((value)=> value*value); 
    return lista1
}

let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push(['Java', 'Ruby' , 'GoLang']);

mostrarLenguajesDeProgramacion(lenguajesDeProgramacion);
mostrarLenguajesDeProgramacionInverso(lenguajesDeProgramacion);
console.log(`El promedio de la lista de números es: ${calcularPromedio([2,3,5,7,11,13,17,19])}`);
retornarGrandePequenoListaNumeros([3,4,6,7,8,1,0,10,11,2,6]);
sumarNumerosLista([4,5,6,7,8,9,9,3,3,3,1,1]);
encontrarNumeroLista([2,3,4,5,6,7,8,6,77,88,22,33,44,51], 77);
sumarNumerosListas([1,2,3,4,5,6,7], [8,9,10,11,13,15]);
console.log(cuadradoNumeroLista([1,2,3,4,4,56,6,5]))

