export default (date)=>{
    const datelement = document.createElement("li");
    datelement.classList.add("date");
    datelement.innerHTML = date;
    return datelement;

};