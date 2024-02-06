
//ESTOY OBTENIENDO TODOS LOS ELEMENTOS CON LA CLASE "formulario__input" Y LOS ESTOY-
//ALMACENANDO EN UNA VARIABLE "inputs" AKA UN ARRAY,ES DECIR: EN ESTA VARIABLE HAY- 
//VARIOS DATOS, EN ESTE CASO LOS ELEMENTOS QUE TENGAN LA CLASE "formulario___input"
var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {             //LUEGO HARA UN RECORRIDO, SE VA REPETIR LA MISMA CANTIDAD DE VECES QUE ES = LA MISMA CANTIDAD DE  //ELEMENTOS QUE SE HAN OBTENIDO EN EL "formulario__input" (3 veces)
    inputs[i].addEventListener('keyup', function(){   //VA ESCUCHAR EL EVENTO KEYUP (CUANDO SUELTO UNA TECLA) EVALUARA LOS SIGUIENTE:

         if (this.value.length>=1) { //SI EL VALOR DE ESTE ELEMENTO ES ">=1" 
            this.nextElementSibling.classList.add('fijar'); //SELECCIONA EL SIGUIENTE ELEMENTO(LABEL) Y AGREGA LA CLASE "fijar".
        } else {
            this.nextElementSibling.classList.remove('fijar'); //EN CASO DE NO SER ">=1" QUITALE LA CLASE "fijar" y regresa.
        }
    });
}
