
        document.addEventListener("DOMContentLoaded", loadTasks);
        document.getElementById("addBtn").addEventListener("click", addTask);
        document.getElementById("darkModeBtn").addEventListener("click", toggleDarkMode);
        document.getElementById("taskList").addEventListener("click", handleTaskActions);

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskList = document.getElementById("taskList");
            let errorMessage = document.getElementById("errorMessage");
            let task = taskInput.value.trim();
            
            if (task === "") {
                errorMessage.textContent = "Please enter a task before proceeding!";
                setTimeout(() => errorMessage.textContent = "", 2000);
                return;
            }
            
            errorMessage.textContent = "";
            let li = document.createElement("li");
            let isPriority = confirm("Does this task need immediate attention?");
            li.className = isPriority ? "priority" : "";
            
            li.innerHTML = `<span>${task}</span> 
                            <button class="edit">✔</button>
                            <button class="remove">❌</button>`;
            taskList.appendChild(li);
            saveTasks();
            updateProgress();
            taskInput.value = "";
        }
        
        function handleTaskActions(event) {
            let target = event.target;
            let li = target.closest("li");
            if (!li) return;
            let span = li.querySelector("span");
            
            if (target.classList.contains("remove")) {
                li.classList.add("fadeOut");
                setTimeout(() => {
                    li.remove();
                    saveTasks();
                    updateProgress();
                }, 500);
            } else if (target.classList.contains("edit")) {
                let newText = prompt("Edit task:", span.textContent);
                if (newText !== null && newText.trim() !== "") {
                    span.textContent = newText.trim();
                    saveTasks();
                }
            } else if (target.classList.contains("reminder")) {
                setTimeout(() => alert(`Reminder: ${span.textContent}`), 5000);
            } else if (target.tagName === "SPAN") {
                span.classList.toggle("completed");
                saveTasks();
                updateProgress();
            }
        }

        function saveTasks() {
            let tasks = [];
            document.querySelectorAll("#taskList li").forEach(li => {
                tasks.push({
                    text: li.querySelector("span").textContent,
                    completed: li.querySelector("span").classList.contains("completed"),
                    priority: li.classList.contains("priority")
                });
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("taskList");
            tasks.forEach(task => {
                let li = document.createElement("li");
                li.className = task.priority ? "priority" : "";
                li.innerHTML = `<span class="${task.completed ? 'completed' : ''}">${task.text}</span> 
                                <button class="edit">✔</button>
                                <button class="remove">❌</button>`;
                taskList.appendChild(li);
            });
            updateProgress();
        }
        
        function updateProgress() {
            let tasks = document.querySelectorAll("#taskList li").length;
            let completed = document.querySelectorAll("#taskList .completed").length;
            let progress = document.getElementById("progress");
            progress.style.width = tasks ? `${(completed / tasks) * 100}%` : "0%";
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }
    