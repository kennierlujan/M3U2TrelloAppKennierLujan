const modalNewTask = document.querySelector('#modalNewTask');
const btnNewTask = document.querySelector('btnNewTask');
const btnCancelNewTask = document.querySelector('btnCancelNewTask');

btnNewTask.addEventListener('click', () => {
    modalNewTask.classList.add('active');
})

btnCancelNewTask.addEventListener('click', () => {
    modalNewTask.classList.remove('active');
});