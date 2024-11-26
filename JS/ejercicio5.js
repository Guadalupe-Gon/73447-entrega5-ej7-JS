const minutos = parseFloat(prompt("Introduce un número de minutos:"));

const segundos = minutos * 60;
const horas = minutos / 60;

alert(`${minutos} minutos son equivalentes a ${segundos} segundos y ${horas} hora/s`)