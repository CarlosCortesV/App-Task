const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",deleteTask);
    return i;
}
const deleteTask = (event) => {
    console.log("Tarea eliminada");
    const parent = event.target.parentElement; //Trae del evento deleteTask el elemento padre osea el li
    parent.remove(); //Elimina el elemento padre que guardamos  en parent

    
}
export default deleteIcon