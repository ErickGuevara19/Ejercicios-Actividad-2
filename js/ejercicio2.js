let nota;
cont=0;
suma = 0;

do {
    nota= Number(prompt("Ingrese el numero" + cont));
    cont = cont +1
    
    suma= suma +nota;
    
} while (nota != 0);



alert("La suma de las " + cont +  " notas ingresadas es de : " + suma);
document.getElementById("suma").innerHTML = "La suma de las " + cont +  " notas ingresadas es de : " + suma;
alert("Los numero ingresados son : " + cont);
