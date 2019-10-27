function mostrar()
{

	var contador=0;	  // cuenta
	var acumulador=0; // me permite hacer sumatorias - //diferencia: en la sintaxias de cada uno
	var numero; 

	while(contador<5)
	{
		numero = prompt("Ingresar 5 numeros");
		numero = parseInt(numero);
		respuesta = confirm("desea ingresar otro numero=");
		acumulador = acumulador+contador;
	}
	//acumulador = acumulador+contador;
	//promedio = acumulador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //promedio = acumulador / contador; //VA ABAJO DE TODO ( AL FINAL)
}//FIN DE LA FUNCIÓN


/*cont=cont+1;     //cont = variable // +1 = incremento constante(de a uno).
//TIENE QUE VER CON CNATIDADES

acumulador = acumulado + var   //acumulador = el saldo de la sube. // depende de cuanta plata quiera cargar el usuario 
//LO USO DE FORMA ACUMULATIVA, VOY AUMENTANDO MAS A MEDIDA QUE INGRESO DATOS.*/
