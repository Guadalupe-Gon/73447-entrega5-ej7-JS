const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

const operacion = prompt("Ingresa la operación a realizar (+, -, *, /):");

let resultado;

if (operacion === "+") {

    resultado = numero1 + numero2;

} else if (operacion === "-") {

    resultado = numero1 - numero2;

} else if (operacion === "*") {

    resultado = numero1 * numero2;

} else if (operacion === "/") {

    if (numero2 !== 0) {

        resultado = numero1 / numero2;
    }
    
}

alert("El resultado es: " + resultado)