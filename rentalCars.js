function rentalCar(tipoDeVehiculo,diasDeAlquiler,sillaParaBebe) {
    let costoPorDia;

    switch (tipoDeVehiculo) {
        case "compacto":
            costoPorDia= 14000
            break 
        case "mediano":
            costoPorDia= 17000
            break
        case "camioneta":
            costoPorDia= 28000
            break 
        default:
            return "tipo de vehiculo no valido"
    }

if (sillaParaBebe=="si"){
    return `Estimado cliente: en base al tipo de vehículo "${tipoDeVehiculo}" alquilado, considerando
los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${(costoPorDia*diasDeAlquiler)+1200}
(extra de $1200 por la silla para bebe)`
}else{
    return `Estimado cliente: en base al tipo de vehículo $${tipoDeVehiculo} alquilado, considerando
los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${(costoPorDia*diasDeAlquiler)+1200}`
}
}


// console.log(rentalCar("compacto",5,"si"));
// console.log(rentalCar("mediano", 9, "no"));
// console.log(rentalCar("camioneta", 3, "si"));