import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./displayTasks.js";
import { orderDates, uniqueDates } from "./services/date.js";
export const addTask = (evento)=>{ // Agrega una nueva tarea
    evento.preventDefault(); //Permite que la pantalla no se recargue automaticamente 
    const list = document.querySelector("[data-list]"); // Traemos el elemento ul que contiene todos los li que seran las tareas
    const input = document.querySelector("[data-form-input]"); //Recibe el valor del input al darle click y esta clase del query sera inmutable
    const calendar = document.querySelector("[data-form-date]"); //Trae el input de date 
    const value = input.value; // Guarda el valor recibo del input en la constante
    const date = calendar.value; //Guarda el valor del inout
    
    const dateFormat = moment(date).format("DD/MM/YYYY"); //En una constante guardamos el fecha, formateada por la libreria moment
    if (value === ""|| date === ""){
        return; //Si se cumple la condicíon me retorne e ignore todo lo que esta debajo
    }
    input.value = ""; //Al crearse la tarea, establecemos como valor vacío el input
    calendar.value =""; //Al crearse la tarea, establecemos como valor vacío el input

    const complete = false;

    const taskObj = { //Creamos un objeto que contiene los dos input que se representan en cada li
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }
    list.innerHTML = "";
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //Obtenemos los valores del arreglo JSON y lo convertimos en un arreglo JS
    taskList.push(taskObj) // Agregamos al arreglo taskList los valores del objeto 
    localStorage.setItem("tasks",JSON.stringify(taskList)); //Guarda la información de la tarea, conviertiendo el objeto JSON en valores de String
    displayTasks();
}
const taskList = []; //Array que contiene las task 

export const createTask = ({value,dateFormat,complete,id}) =>{ //Crea la funcion anonima con el evento y la guarda el createTask
    const task = document.createElement("li"); //Creamos un elementos li que sera la tarea recibida
        task.classList.add("card"); //Agrega la clase card que contiene los estilos a la tarea 
      
    const taskContent = document.createElement("div"); //Crea el elemento contenedor div

    const check = checkComplete(id)
    if (complete){
        console.log("Completada");
        check.classList.toggle("far"); //Agregamos la clase y esta verifica que al no existir la agregue al click o por el contrario la quite 
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
    }

    const titleTask = document.createElement("span"); //Crea el elemento que contiene el titulo de la tarea
        titleTask.classList.add("task"); // Agrega la clase de css al titulo
        titleTask.innerText = value; // Establece el valor del titulo como el valor que se recibio del input
        taskContent.appendChild(check); //Agrega al elemento padre div el icono de tarea (flecha)
        taskContent.appendChild(titleTask); // Agerega al contenedor lo que esta el titulo

    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent); // Al elemento task que es el "li" de la tarea agregar el contenido de tarea creada
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    return task;
}
