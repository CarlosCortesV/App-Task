const btn = document.querySelector("[data-form-btn]")
const createTask = (evento) =>{ //Crea la funcion anonima con el evento y la guarda el createTask
    evento.preventDefault(); //Permite que la pantalla no se recargue automaticamente 
    console.log("Tarea agregada")
    const input = document.querySelector("[data-form-input]").value //Recibe el valor del input al darle click y esta clase del query sera inmutable
    console.log(input);
}
console.log(btn);
btn.addEventListener("click",createTask);