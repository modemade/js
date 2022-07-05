let leInput = document.getElementById("input");
let leButton = document.getElementById("btn0");
let laList = document.getElementById("liste");

function addTask(event) {
    
    event.preventDefault();
    let list0 = document.createElement("li");
    list0.innerHTML = leInput.value;
    laList.append(list0);
    leInput.value="";

};

 leButton.addEventListener("click", addTask);