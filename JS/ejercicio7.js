const auto = {
    marca: "Volkswagen",
    modelo: "Fox",
    color: "Negro",
    año: 2018,
    velocidadMaxKmH: 220, 
    puertas: 5,
    precio: "$99,990",
}

console.log(auto);

document.write(`El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado, alcanzando una velocidad máxima de ${auto.velocidadMaxKmH} km/h.`);