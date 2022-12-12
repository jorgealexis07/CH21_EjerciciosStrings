let nombre = "Jorge Alexis";
nombre = nombre.toUpperCase();
let letra="";
let contFinal = 0;

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp = 1;
    for (let contador = index+1; contador < nombre.length; contador++) {
        if (nombre.charAt(index) == nombre.charAt(contador)) 
            contTemp++;
    }// for cont
    if (contTemp > contFinal) {
        contFinal = contTemp;
        letra = nombre.charAt(index);
    } // cont temp > contfinal
}// for index
console.log(letra, contFinal);


function InvertirCadena(cadena){
    let cad_inversa = [];
    for (let j = cadena.length-1; j >=0 ; j--) {
        console.log(cadena[j]);

    }
    console.log(cad_inversa);
}

function reves(str){
    let tmpStr = "";
    for (let indice = str.length-1; indice >= 0; indice--) {
        tmpStr += str.charAt(indice);
    }//for indice
    return tmpStr;
}//reves



