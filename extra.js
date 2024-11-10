function upperConverter(palabra){
    return palabra.toUpperCase()
}

function dataType(dato){
    return typeof(dato);
}

function dogAge(edadPerro){
    return edadPerro*7;
}

function hourPrice(salarioMensual,diasTrabajo,horasTrabajasPorDia){
    
    pagaPorDia= salarioMensual/diasTrabajo;

    return pagaPorDia/horasTrabajasPorDia;

}

// console.log(upperConverter("hola"));
// console.log(dataType(1));
// console.log(dogAge(2));
// console.log("valor de una hora de trabajo :", hourPrice(80000,27,6));

module.exports = {upperConverter, dataType, dogAge, hourPrice};