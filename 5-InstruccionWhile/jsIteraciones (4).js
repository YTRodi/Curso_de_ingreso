function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero); // PARA QUE NO APAREZCA "LALALA"

	while(isNaN(numero)/*Si no es un numero da = NaN*/ || numero >=10 || numero <=0)
	{
		//console.log(numero);
		numero = prompt("reingresa el numero"); //tengo que seguir preguntando.
		
	}
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN