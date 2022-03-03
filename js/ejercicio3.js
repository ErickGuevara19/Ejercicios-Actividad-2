let nota;

cont = -1;
suma = 0;

do {
    nota= Number(prompt("Ingrese la nota"));
    cont = cont+1;
    suma= suma +nota;
    
} while (nota != 0);

promedio= suma /cont;

alert("La suma de las " + cont +  " notas ingresadas es de : " + suma);
document.getElementById("suma").innerHTML = "La suma de las " + cont +  " notas ingresadas es de : " + suma;
alert("El promedio de las " + cont + " notas ingresadas es : " + promedio);
document.getElementById("promedio").innerHTML = "El promedio de las " + cont + " notas ingresadas es : " + promedio;