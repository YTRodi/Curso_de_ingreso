/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad = document.getElementById("Cantidad").value;
    var precioDescuento;
    var precioFinal;
    var precioLampara;
    cantidad =parseInt(cantidad);
    precioLampara = 5;

    switch(cantidad)
    {
        case "1":
        {
        cantidad>=6;
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 50/100; //105 BIEN
        precioFinal = cantidad - precioDescuento;
        break;
        
        }
        //document.getElementById("PrecioDescuento").value = precioFinal;
    }

    document.getElementById("PrecioDescuento").value = precioFinal;
}

/*--------------------------------------------------------------------------------------
var cantidad;
    var precioLampara;
    var descuento;
    var precioDescuento;
    var precioFinal;
    var marca;
    var impuesto;
    
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);
    precioLampara = 35;
    impuesto = precioFinal * 10/100;
    

    if(cantidad >=6)//A
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 50/100; //105 BIEN
        precioFinal = cantidad - precioDescuento;

    }
    else if(cantidad == 5 && marca == "ArgentinaLuz")//B - solo ArgentinaLuz.
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 40/100;
        precioFinal = cantidad - precioDescuento;

    }
    else if(cantidad == 5 && marca != "ArgentinaLuz")//B - != desigual a ArgentinaLuz.
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 30/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca == "ArgentinaLuz")//C - ArgentinaLuz 25%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 25/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca == "FelipeLamparas")//C - FelipeLamparas 25%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 25/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca != "ArgentinaLuz" && "FelipeLamparas")//C - el resto 20%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 20/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca == "ArgentinaLuz")//D - ArgentinaLuz 15%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 15/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca == "FelipeLamparas")//D - FelipieLamparas 10%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 10/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca != "ArgentinaLuz" && "FelipeLamparas")//D - el resto 5%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 5/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(precioFinal >=120) // CONTINUARAAAA!!!
    {
        precioFinal = precioFinal + impuesto;
        alert("Usted pago " + impuesto +  " de IIBB");
    }
    document.getElementById("precioDescuento").value = precioFinal;

*/
