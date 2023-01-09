import {createTask} from "./addTask.js";
import checkComplete from "./checkComplete.js";
import dateElement from "./dateElement.js";
import { uniqueDates,orderDates} from "./services/date.js";
export const displayTasks = () => {
    console.log(uuid.v4());
    const list = document.querySelector("[data-list]");
    const tasksList  = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList) // Trae todas las tareas creadas
    orderDates(dates);
    dates.forEach(date => {
        console.log(date);
        const dateMoment = moment(date,"DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            console.log(taskDate);
            const diff = dateMoment.diff(taskDate);
            if(diff === 0){
                list.appendChild(createTask(task));
            }
        });
    })
    
};