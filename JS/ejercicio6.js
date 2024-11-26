const precioDolares = parseFloat(prompt("Introduce el precio de un producto en dólares:"));
const precioFinalPesos = precioDolares * 1130; 
const iva = precioFinalPesos * 0.21; 
const precioTotal = precioFinalPesos + iva;

alert(`El precio total del producto es $${precioTotal}.`);