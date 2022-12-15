const checkComplete = ()=>{ //funcion que permite crear el icono de la tarea creada
    const i = document.createElement("i"); // Creamos el icono "i"
    i.classList.add("far","fa-check-square","icon"); //le agregamos la clase que contiene el icono de la libreria 
    i.addEventListener("click",completeTask) //Al hacer click en el boton disparar la función completeTask
    return i;
};

const completeTask = (event) => { //Funcion que permite seleccionar si la tarea está ok
    const element = event.target; // traemos la clase del elemento con el evento click y la el valor de la clase target
    element.classList.toggle("far"); //Agregamos la clase y esta verifica que al no existir la agregue al click o por el contrario la quite 
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    
};
export default checkComplete //Exportar funcion