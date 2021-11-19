function codif() {

    let palabra1 = document.getElementById("palabra1").value;
    let numero = parseInt(document.getElementById("numero").value);
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcM='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let splitAbc = abc.split('');
    let splitPalabra = palabra1.split('');
    let splitMayus=abcM.split('');
/*El funcionamiento de este ejercicio es igual que el anterior con la diferencia
de que somos nosotros quienes introducimos las posiciones a mover. Esto lo hacemos
con otro input numérico que estamos recogiendo en la variable "numero"*/

document.write("<h1 align='center' ><font face ='calibri' size: '2rem' color=#DD5A05>");

    for (i = 0; i < splitPalabra.length; i++) {

        for (j = 0; j < splitAbc.length; j++) {
             let num=j+numero;

             if(num>24){

                num=num-26;
             }

            if (splitPalabra[i] == splitAbc[j]) {
                

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



