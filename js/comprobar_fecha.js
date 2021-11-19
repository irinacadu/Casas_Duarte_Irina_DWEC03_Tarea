
function comprobarFecha() {

    let fecha1 = document.getElementById("fecha").value;

    /* Creo una expresión regular para comprobar el formato de fecha. En este caso he agrupado por un lado las posibilidades
    que puede terner el formato de día, lo mismo con los meses y con los años. Por lo que tengo 3 agrupaciones.*/

    let exprFecha = /^(\d|0\d|1\d|2\d|3[0-1])([/]|\s)(\d|0\d|1[0-2])([/]|\s)([0-9]\d)$/g;

    /* si la fecha introducida coincide con el formato especificado estará correcto*/
    if (fecha1.match(exprFecha) ) {


        document.write("<h2 align=center><font face='Calibri' color='cadetblue'>¡Olé Tú!<br/>Lo has escrito perfectamente :)<br/> La fecha introducida es: <br/><p><font size= '5rem' color=#DD5A05>" + fecha1+"</font></font></p></h2>");
        document.write("<a href='index.html'><p align=center font-face='calibri' color='black'>Volver a la página principal</p></a>");

    /* si no, se podrá volver a intentar volviendo a la página de inicio*/
    } else {

        document.write("<h2 align=center><font face='calibri' color=#DD5A05><br/> Menos mal que en el enunciado pone como tienes que escribir la fecha... </font></h1>")
        document.write("<a href='index.html'><p align=center font-face='calibri' color='#DD5A05'>Anda, vuelve a intentarlo</p></a>");

        
    }

   

   

}


