function warTime() {

    let palabraCod = document.getElementById("palabraCod").value;
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcM='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /*Con split, hacemos que las cadenas anteriores se conviertan en array. Esto nos ayudará a contar las posiciones.*/
    let splitAbc = abc.split('');  
    let splitPalabra = palabraCod.split('');
    let splitMayus=abcM.split('');

    document.write("<h1 align='center' ><font face ='calibri' size: '2rem' color=#DD5A05>");

    /*En primer lugar recorro la longitud de la palabra recogida por el imput*/

        for (i = 0; i < splitPalabra.length; i++) {

    /*Además, hago lo mismo con el abecedario*/
            for (j = 0; j < splitAbc.length; j++) { 

                let num=j+2;// guardo en variable la condición de las posiciones a mover.

                 if(num>24){// el abecedario tiene 26 letras. Si se sobrepasa tendremos letras no definidas por lo tanto, necesitamos que
                            //vuelva atrás en la cadena para encontrar la letra correspondiente.
                    num = num-26;
                 }

    /*Si la posición en el array de la palabra, coincide con la posición en el array del abc entonces implementamos las posiciones a mover
     e imprimimos el código resultante*/
                if (splitPalabra[i] == splitAbc[j] ) { 
  
                    let code = splitAbc[num];  
                    document.write(code);   
                                
                
                }else if(splitPalabra[i] == splitMayus[j]){
                    
                    let code = splitMayus[num];  
                    document.write(code); 

                }
            }
            
            
        }

        document.write("</font></h1>");
        document.write("<a href='index.html'><p align=center  font-face='calibri' color='#DD5A05'>Vuelve a la página principal</p></a>");

 
    }

  

   

















