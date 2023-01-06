
//creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id1, id2, id3)//declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    { 
        if (document.getElementById) //uso el condicional if para verificar el estado del elemento ID de mi HTML
        {
            let elemento = document.getElementById(id1); //creo una variable llamada elemento que hace referencia al elemento HTML que quiero ocultar
            let elemento2 = document.getElementById(id2); //creo una variable llamada elemento que hace referencia boton elegido
            let elemento3 = document.getElementById(id3); //creo una variable llamada elemento que hace referencia texto asociado
            if(elemento.style.display == 'none')//si el elemento tiene un display NONE es porque esta oculto
            {
                elemento.style.display = 'block';//entonces hago que display sea BLOCK para mostrarlo
                elemento2.innerHTML = "-"
                elemento3.innerHTML = "Clickear aqui arriba para ocultar la informacion"
            }
            else{//else se usa para el caso contrario a lo que pregunta IF
                elemento.style.display = 'none'; //por lo tanto, si display del elemento es BLOCK, entonces lo pone en NONE
                elemento2.innerHTML = "+"
                elemento3.innerHTML = "Clickear aqui arriba para ampliar la informacion"
            }
        }
    }
// Llamada a la funicon
muestra_oculta('contenido', 'btn', 'txt');//llamo a la función con selector que quiero ocultar/mostrar
muestra_oculta('contenido1', 'btn1', 'txt1');//llamo a la función con selector que quiero ocultar/mostrar
muestra_oculta('contenido2', 'btn2', 'txt2');//llamo a la función con selector que quiero ocultar/mostrar
muestra_oculta('contenido3', 'btn3', 'txt3');//llamo a la función con selector que quiero ocultar/mostrar


