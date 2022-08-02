const API_URL = "https://my-json-server.typicode.com/kennierlujan/M3U2TrelloAppKennierLujan";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("card-task");

  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("card-task__title");
  taskTitle.innerText = task.title;

  let taskResponsible = document.createElement("p");
  taskResponsible.classList.add("card_task__responsible");
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;

  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  let taskCreate = document.createElement("p");
  taskCreate.classList.add("card-task__date");
  taskCreate.innerHTML = `<span class="card-task__date--tag-date">Creación:</span> ${dateFormat(
    task.created
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#progressTasks");
  let columnDone = document.querySelector("#doneTasks");

  if (task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "in-progress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};