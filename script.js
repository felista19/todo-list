document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value;

    if (taskValue) {
        const li = document.createElement("li");
        li.textContent = taskValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);

        taskInput.value = ""; // Clear the input field
    }
}

// Optional: Mark task as completed
document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});
