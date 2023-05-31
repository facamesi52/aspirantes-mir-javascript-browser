// Declarando las variables
let input = document.getElementById("input");
let boton = document.getElementById("boton");
let formulario = document.getElementById("formulario");
let listaTareas = document.getElementById("listaTareas");
let contadorTotal = document.getElementById('totalTareas');
let contadorRealizadas = document.getElementById('tareasRealizadas');
let btnBorrarTachadas = document.getElementById('btnBorrarTachadas');
let borrarTodo = document.getElementById('borrarTodo');
let fecha = document.getElementById('fecha');
// tomado la hora
const fechaActual = new Date();
// Obtener la fecha en formato local (zona horaria del usuario)
const fechaLocal = fechaActual.toLocaleString('es-CO', { timeZone: 'America/Bogota' });
fecha.textContent = `Hola Usuario la fecha y hora en Colombia es ${fechaLocal}`

// Manejo del formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const tarea = input.value.trim();
  
  if (tarea !== '') {
    // Crear un nuevo elemento de lista (<li>) y agregar la tarea como texto
    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea;

    // Crear botón para marcar como realizada
    const btnRealizada = document.createElement('input');
    btnRealizada.type = 'checkbox';
    btnRealizada.textContent = 'Realizada';
    btnRealizada.addEventListener('click', function() {
      nuevaTarea.classList.toggle('realizada');
      actualizarContador();
    });

    // Crear botón para borrar la tarea
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'x';
    btnBorrar.addEventListener('click', function() {
      listaTareas.removeChild(nuevaTarea);
      actualizarContador();
    });

    // Agregar los botones a la tarea
    nuevaTarea.appendChild(btnRealizada);
    nuevaTarea.appendChild(btnBorrar);

    // Agregar la nueva tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    // Actualizar el contador de tareas
    actualizarContador();

    // Limpiar el campo de entrada
    input.value = '';
  }
  else{
    alert("Debe escribir una tarea")
  }
});

// Función para actualizar el contador de tareas
function actualizarContador() {
  const tareasRealizadas = document.querySelectorAll('.realizada');
  contadorTotal.textContent = listaTareas.children.length;
  contadorRealizadas.textContent = tareasRealizadas.length;
}

// Agregar evento al botón para eliminar tareas tachadas
btnBorrarTachadas.addEventListener('click', function() {
  const tareasRealizadas = document.querySelectorAll('.realizada');
  tareasRealizadas.forEach(function(tarea) {
    listaTareas.removeChild(tarea);
  });
  actualizarContador();
});

//Agregar evento para borrar todo
borrarTodo.addEventListener('click', function(){
    listaTareas.textContent = "";
    actualizarContador();
})