import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
( () => {
const btn = document.querySelector("[data-form-btn]"); //Trae el boton de agregar

const createTask = (event) =>{ //Crea la funcion anonima con el evento y la guarda el createTask
    event.preventDefault(); //Permite que la pantalla no se recargue automaticamente 
    console.log("Tarea agregada");
    const input = document.querySelector("[data-form-input]"); //Recibe el valor del input al darle click y esta clase del query sera inmutable
    const value = input.value; // Guarda el valor recibo del input en la constante
    const list = document.querySelector("[data-list]"); // Traemos el elemento ul que contiene todos los li que seran las tareas
    const task = document.createElement("li"); //Creamos un elementos li que sera la tarea recibida
    task.classList.add("card"); //Agrega la clase card que contiene los estilos a la tarea 
    input.value = ""; //Restablece el valor del input a basio después del click

    const taskContent = document.createElement("div"); //Crea el elemento contenedor div
    taskContent.appendChild(checkComplete()); //Agrega al elemento padre div el icono de tarea (flecha)
    const titleTask = document.createElement("span"); //Crea el elemento que contiene el titulo de la tarea
    titleTask.classList.add("task"); // Agrega la clase de css al titulo
    titleTask.innerText = value; // Establece el valor del titulo como el valor que se recibio del input
    taskContent.appendChild(titleTask); // Agerega al contenedor lo que esta el titulo
    task.appendChild(taskContent) // Al elemento task que es el "li" de la tarea agregar el contenido de tarea creada
    task.appendChild(deleteIcon());
    list.appendChild(task); //Al elemento lista (ul) agregar la tarea li 
    
}

btn.addEventListener("click",createTask); // Al hacer click en el boton, crear la tarea

})(); //Creamos un funcion que limita el acceso a los nodos que se agregan el javascript, por seguridad