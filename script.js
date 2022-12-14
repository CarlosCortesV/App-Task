const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) =>{ //Crea la funcion anonima con el evento y la guarda el createTask
    evento.preventDefault(); //Permite que la pantalla no se recargue automaticamente 
    console.log("Tarea agregada")
    const input = document.querySelector("[data-form-input]") //Recibe el valor del input al darle click y esta clase del query sera inmutable
    const value = input.value; // Guarda el valor recibo del input en la constante
    input.value = ""; //Restablece el valor del input a basio después del click
    const list = document.querySelector("[data-list]"); // Traemos el elemento ul que contiene todos los li que seran las tareas
    const task = document.createElement("li"); //Creamos un elementos li que sera la tarea recibida
    task.classList.add("card")
    const content = `<div> 
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span> 
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`//Trae el contenido que deseamos agregar con el valor que esta en value
  task.innerHTML = content; //Agrega al HTML el lo que esta en content
  list.appendChild(task); //Al elemento lista agregar la tarea li 
    console.log(value);
}
console.log(btn);
btn.addEventListener("click",createTask);