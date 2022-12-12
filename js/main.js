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
        for (let j = cadena.length; j >=0 ; j--) {
            console.log(cadena[j]);
        }
}