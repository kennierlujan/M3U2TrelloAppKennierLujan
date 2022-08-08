//Referenciamos nuestro aside donde creamos la nueva tarea
const modalNewTask = document.querySelector('#modalNewTask');
// Referenciamos el boton crear tarea
const btnNewTask = document.querySelector('#btnNewTask');
// Referenciamos el boton cancelar
const btnCancelNewTask = document.querySelector('#btnCancelNewTask');

//Añadimos la función que cuando se le de click se agregue la clase active y se muestre el formulario
btnNewTask.addEventListener('click', () => {
  modalNewTask.classList.add('active');
});

// Añadimos la función que cuando se le de click se elimine la clase active y se oculte el formulario
btnCancelNewTask.addEventListener('click', () => {
  modalNewTask.classList.remove('active');
});
