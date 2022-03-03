
let valor;
let opcion;

valor = Number(prompt("Ingrese el precio del producto que se llevara"));
document.getElementById("valor").innerHTML = "El valor del producto a llevar es de "+ valor;
alert ("Si esta en el Tipo A  ingrese el #1");
alert("Si esta en el Tipo B  ingrese el #2");
alert("Si esta en el Tipo C  ingrese el #3");

opcion = Number(prompt("Ingrese el numero de su categoria"));
document.getElementById("opcion").innerHTML = "La opcion que usted escogio es " + opcion;

switch (opcion) {
    case 1:
        descuento = valor * 0.1;
        document.getElementById("descuento").innerHTML = "El descuento que acabo de recibir es de : " + descuento ;
        preciofinal = valor - descuento;
        document.getElementById("preciofinal").innerHTML = "El valor a pagar es de : " + preciofinal;

    
        
        break;
    case 2:
        descuento = valor * 0.15;
        document.getElementById("descuento").innerHTML = "El descuento que acabo de recibir es de : " + descuento ;
        preciofinal = valor - descuento;
        document.getElementById("preciofinal").innerHTML = "El valor a pagar es de : " + preciofinal;

        break;
    case 3:
        descuento = valor * 0.2;
        document.getElementById("descuento").innerHTML = "El descuento que acabo de recibir es de : " + descuento ;
        preciofinal = valor - descuento;
        document.getElementById("preciofinal").innerHTML = "El valor a pagar es de : " + preciofinal;

    default:
        break;
}

alert("EL valor total a pagar es de : " + preciofinal)