function funcionCallback(tipoDeHamburgesa,ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6,ingrediente7,ingrediente8){
    let total=0;
    let ingredientes=[ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6,ingrediente7,ingrediente8];
    let preciosIngredientes = [30, 25, 5, 5, 5, 15, 10, 10];

    for (let i = 0; i < ingredientes.length; i++) {
        ingredientes[i]==true? total+=preciosIngredientes[i]: 0;
    }
    switch (tipoDeHamburgesa) {
        case "carne":
            total+=1800;
            break;
        case "pollo":
            total+=1500;
            break;
        case "vegetariana":
            total+=1200;
            break;
        default:
            console.log("ingrese un tipo de hamburgesa valido");
            break;
    }

    return total;
}

function fastFood(nombre,apellido,tipoDeHamburgesa,ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6,ingrediente7,ingrediente8) {
    
    let precioFinal= funcionCallback(tipoDeHamburgesa,ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6,ingrediente7,ingrediente8);

    return (`Estimado ${nombre} ${apellido}, el monto total a pagar es de ${precioFinal}`)
    
}

// let mensaje = fastFood("dante","colombo","carne",false, false, false, false, false, false, false, true);
// console.log(mensaje);
