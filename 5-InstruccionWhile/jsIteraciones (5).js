function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("ERROR, reingrese la letra correcta");
    }
    if (sexo =="f")
    {
        sexo = "femenino";
    }
    else if(sexo == "m")
    {
        sexo = "masculino";
    }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN

//NO VA ESTO!!
/*var sexo = prompt("ingrese f ó m .");

while(sexo == "f" || sexo == "m")
{
     if(sexo == "f")
     {
         sexo = "femenino";
     }
     else if(sexo == "m")
     {
         sexo = "masculino";
     }
}
    if (sexo !="f")
    {
        sexo = prompt("error, reingresa la letra correcta");
    }
    else if(sexo !="m")
    {
        sexo = prompt("error, reingresa la letra correcta");
    }*/