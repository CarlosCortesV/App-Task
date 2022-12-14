( () => {
const btn = document.querySelector("[data-form-btn]") //Trae el boton de agregar

const createTask = (evento) =>{ //Crea la funcion anonima con el evento y la guarda el createTask
    evento.preventDefault(); //Permite que la pantalla no se recargue automaticamente 
    console.log("Tarea agregada")
    const input = document.querySelector("[data-form-input]") //Recibe el valor del input al darle click y esta clase del query sera inmutable
    const value = input.value; // Guarda el valor recibo del input en la constante
    const list = document.querySelector("[data-list]"); // Traemos el elemento ul que contiene todos los li que seran las tareas
    const task = document.createElement("li"); //Creamos un elementos li que sera la tarea recibida
    task.classList.add("card") //Agrega la clase card que contiene los estilos a la tarea 
    input.value = ""; //Restablece el valor del input a basio después del click

    const taskContent = document.createElement("div"); //Crea el elemento contenedor div
    taskContent.appendChild(checkComplete()); //Agrega al elemento padre div el icono de tarea (flecha)
    const titleTask = document.createElement("span"); //Crea el elemento que contiene el titulo de la tarea
    titleTask.classList.add("task"); // Agrega la clase de css al titulo
    titleTask.innerText = value; // Establece el valor del titulo como el valor que se recibio del input
    taskContent.appendChild(titleTask); // Agerega al contenedor lo que esta el titulo
    taskContent.appendChild(deleteTask());
    task.appendChild(taskContent) // Al elemento task que es el "li" de la tarea agregar el contenido de tarea creada
    list.appendChild(task); //Al elemento lista (ul) agregar la tarea li 
    
}

btn.addEventListener("click",createTask); // Al hacer click en el boton, crear la tarea

const checkComplete = ()=>{ //funcion que permite crear el icono de la tarea creada
    const i = document.createElement("i"); // Creamos el icono "i"
    i.classList.add("far","fa-check-square","icon"); //le agregamos la clase que contiene el icono de la libreria 
    i.addEventListener("click",completeTask) //Al hacer click en el boton disparar la función completeTask
    return i;
}

const completeTask = (event) => { //Funcion que permite seleccionar si la tarea está ok
    const element = event.target; // traemos la clase del elemento con el evento click y la el valor de la clase target
    element.classList.toggle("far"); //Agregamos la clase y esta verifica que al no existir la agregue al click o por el contrario la quite 
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    
}

const deleteTask = ()=>{
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    return i;
}
})(); //Creamos un funcion que limita el acceso a los nodos que se agregan el javascript, por seguridad