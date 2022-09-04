function addTask() {
  const taskInput = document.querySelector("#task-title").value;

  if (taskInput) {
    const tamplate = document.querySelector(".tamplate");
    const newTask = tamplate.cloneNode(true);

    newTask.querySelector(".task-title").textContent = taskInput;

    newTask.classList.remove("tamplate");
    newTask.classList.remove("hide");

    const list = document.querySelector("#task-list");
    list.appendChild(newTask); // add task
    hasItem();

    newTask.querySelector(".remove-btn").addEventListener("click", function () {
      removeTask(this); // remove task
      hasItem();
    });

    newTask.querySelector(".done-btn").addEventListener("click", function () {
      completeTask(this); // complete task
      hasItem();
    });

    let taskTitle = document.querySelector("#task-title");
    taskTitle.value = "";
    taskTitle.focus();
  } else {
    alert("Não existe tarefa para ser adicionada, tente novamente.");
  }
}

function removeTask(task) {
  task.parentNode.remove(true);
}

function completeTask(task) {
  task.parentNode.classList.toggle("done");
}

function hasItem() {
  const elem = document.querySelector(".tamplate");
  const subtitle = document.querySelector("#subtitle");

  elem.nextElementSibling == null
    ? (subtitle.textContent = "")
    : (subtitle.textContent = "Suas terafas:");
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addTask();
});

hasItem();
