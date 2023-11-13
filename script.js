const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", e => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function addTask() {
    if (inputBox.value === '') {
        alert("Textbox is empty!");
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = '';
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();