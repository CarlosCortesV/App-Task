import {addTask} from "./components/addTask.js";
import { displayTasks } from "./components/displayTasks.js";
( () => {
const btn = document.querySelector("[data-form-btn]"); //Trae el boton de agregar
btn.addEventListener("click",addTask); // Al hacer click en el boton, crear la tarea
displayTasks();
})(); //Creamos un funcion que limita el acceso a los nodos que se agregan el javascript, por seguridad