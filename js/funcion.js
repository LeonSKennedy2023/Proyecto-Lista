let contenedorTarea = document.getElementById("listaTarea");
let botonAgregar = document.getElementById("botonAgregar");
let nuevaTarea = document.getElementById("nuevaTarea");
let totalTareas = 0;
let tareasMarcadas = 0;

function actualizarContadores() {
    // Obtener todas las tareas en la lista
    let todasLasTareas = contenedorTarea.querySelectorAll(".list-group-item");

    // Contar tareas marcadas
    tareasMarcadas = 0;
    todasLasTareas.forEach(tarea => {
        if (tarea.style.backgroundColor === "rgb(40, 167, 69)") {
            tareasMarcadas++;
        }
    });

    // Actualizar el elemento de contadores
    mostrarContadores();
}

function mostrarContadores() {
    // Crear el elemento para mostrar los contadores
    let contadoresElemento = document.getElementById("contadores");

    // Si el elemento ya existe, eliminarlo
    if (contadoresElemento) {
        contenedorTarea.removeChild(contadoresElemento);
    }

    // Crear un nuevo elemento para los contadores
    contadoresElemento = document.createElement("div");
    contadoresElemento.id = "contadores";
    contadoresElemento.innerHTML = `Total tareas: ${totalTareas}, Tareas marcadas: ${tareasMarcadas}`;

    // Agregar el elemento de contadores al contenedor
    contenedorTarea.appendChild(contadoresElemento);
}

function crearTarea() {
    if (nuevaTarea.value.trim() === "") {
        alert("Por favor, ingresa una tarea válida antes de agregar.");
        return;
    }

    // Crea la nueva tarea
    let tareas = document.createElement("li");
    tareas.classList.add("list-group-item");
    contenedorTarea.appendChild(tareas);
    tareas.innerHTML = nuevaTarea.value;

    let basura = document.createElement("i");
    basura.classList.add("bi", "bi-trash", "float-end", "basura");

    // Borrar tarea
    basura.addEventListener("click", function () {
        contenedorTarea.removeChild(tareas);
        totalTareas--;  // Disminuir total de tareas al borrar
        actualizarContadores();
    });

    tareas.appendChild(basura);

    let palomita = document.createElement("i");
    palomita.classList.add("bi", "bi-check2-circle", "float-end", "palomita");

    // Marcar tarea
    palomita.addEventListener("click", function () {
        tareas.style.backgroundColor = "#28a745";
        tareasMarcadas++;  // Incrementar tareas marcadas al marcar
        actualizarContadores();
    });

    tareas.appendChild(palomita);

    // Incrementar total de tareas al agregar
    totalTareas++;

    // Actualizar el contador de tareas totales
    actualizarContadores();

    // Limpiar input (opcional)
    nuevaTarea.value = "";
}

// Inicializar el contador al cargar la página
actualizarContadores();
