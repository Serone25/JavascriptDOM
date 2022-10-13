// Your code here
function addTask(){
    var li = document.createElement("li");
    var inputValue= document.getElementById("addToDo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.querySelector("ul").appendChild(li);
}
const input = document.querySelector("input");
input.addEventListener("input",addTask);
addTask();