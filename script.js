 function addTask() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();

        if (taskText === "") {
          alert("Please enter a task.");
          return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="btn-delete" onclick="deleteTask(this)">Delete</button>
      `;

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
      }

      function deleteTask(button) {
        button.parentElement.remove();
      }

      function toggleComplete(span) {
        span.parentElement.classList.toggle("completed");
      }