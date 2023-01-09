import { displayTasks } from "./displayTasks.js";
const deleteIcon = (id) => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",() => deleteTask (id)); //Solo le pasamos el id, puesto que, si seleccionamos el evento estariamos eliminado todas las tareas
    return i;
}
const deleteTask = (id) => {
    const li = document.querySelector("[data-list]");
    console.log("Tarea eliminada",id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id) //Verifica la posición en el arreglo de la task seleccionada
    const newTasks = tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    li.innerHTML = "";
    displayTasks();
    console.log(tasks);
}
export default deleteIcon