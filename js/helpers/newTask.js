// Apuntamos al formulario para crear la nueva tarea del HTML
const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formData = ev.target;
  
  // Recopilamos la información a enviar a la API
  const data = {
    title: formData.titleTask.value,
    person: formData.responsibleTask.value,
    details: formData.detailsTask.value,
    // deadline: formData.deadLineTask.value,
    deadline: Number(moment().add(formData.deadLineTask.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'to-do'
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      //Mandamos la información a la API
      createTask(res.data);
      //Reseteamos el formulario
      formData.reset();
    })
    .catch((err) => console.error(err));
});
