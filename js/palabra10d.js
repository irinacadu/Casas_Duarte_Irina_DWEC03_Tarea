function palabra10d() {



    var palabra = prompt("Introduce una palabra de 10 caracteres");
    var longitudP = palabra.length; //guardamos en variable la longitud de la cadena.
    let expPalabra = /\d/g; // expresión que comprueba que todos los caracteres son letras.

  
    /* mientras la palabra tenga menos de 10 caracteres la volverá a solicitar al usuario */
    while (longitudP < 10) {


        var palabra = prompt("La palabra es demasiado corta. Inténtalo de nuevo");

        longitudP = palabra.length;

    }

  /*Si cuando la tenga más de 10 caracteres contiene un número (comprobaremos con la expresión anteriormente declarada) seguirá pidiendo la palabra.*/

    while (palabra.match(expPalabra)) {

        var palabra = prompt("La palabra contiene un número. Inténtalo de nuevo");

        expPalabra = expPalabra;


    }

    /* cuando la palabra cumple requisitos sale de los bucles*/

    document.write("<h2 align=center><font face='calibri' color='cadetblue'>¡Muy bien! la palabra que has escrito es: <br/><h1><font color=#DD5A05>"+palabra.toUpperCase()+"</font></h1></font></h2>");

    document.write("<a href='index.html'><p align=center font-face='calibri' color='black'>Volver a la página principal</p></a>");

}















