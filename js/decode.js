function decodificar() {

    let decodificar = document.getElementById("palabra2").value;
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let abcM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let splitMayus = abcM.split('');
    let splitAbc = abc.split('');
    let splitDecodif= decodificar.split('');
    let revAbc=splitAbc.reverse();

/*igual que los dos ejercicios anteriores solo que en este, le damos la vuelta al abc para que empiece por el final con el método reverse().
Con esto trabajamos al revés por lo que en vez de "desordenar" las letras, las vuelve a colocar en su sitio.*/

    document.write("<h1 align='center' ><font face ='calibri' size: '2rem' color=#DD5A05>");

    for (i = 0; i < splitDecodif.length; i++) {

        for (j = 0; j < revAbc.length; j++) {

            
            let num = j+2;

            if(num>25){

                num=num-26;

            }

            if (splitDecodif[i] == revAbc[j]) {

                let code = revAbc[num];

                document.write(code);

            } else if (splitDecodif[i] == splitMayus[j]) {

      
                let code = splitMayus[num];
                document.write(code);

            }


        }
    }

    document.write("</font></h1>");
    document.write("<a href='index.html'><p align=center  font-face='calibri' color='#DD5A05'>Vuelve a la página principal</p></a>");
}
