const checkComplete = (id)=>{ //funcion que permite crear el icono de la tarea creada
    const i = document.createElement("i"); // Creamos el icono "i"
    i.classList.add("far","fa-check-square","icon"); //le agregamos la clase que contiene el icono de la libreria 
    i.addEventListener("click",(event) => completeTask(event,id)) //Al hacer click en el boton disparar la función completeTask
    return i;
};

const completeTask = (event,id) => { //Funcion que permite seleccionar si la tarea está ok
    const element = event.target; // traemos la clase del elemento con el evento click y la el valor de la clase target
    element.classList.toggle("far"); //Agregamos la clase y esta verifica que al no existir la agregue al click o por el contrario la quite 
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    console.log("Check id:", id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id) //Verifica la posición en el arreglo de la task seleccionada
    tasks[index]["complete"] = !tasks[index]["complete"]//Del elemento task selecionado trae el indece y de este extrae la llave complete del objeto
    localStorage.setItem("tasks",JSON.stringify(tasks));
};
export default checkComplete //Exportar funcion