const ToDo = document.querySelector("#tareas") 
const btnagregar = document.querySelector("#agregarTarea")
const inputToDo = document.querySelector("#nuevaTarea")
const contar = document.querySelector("#cuenta-tareas")
const TListas = document.querySelector("#tareas-realizadas")

const tareas = [
    { id: 1, nombre: 'Alistarme para el trabajo', completada: false },
    { id: 2, nombre: 'Pasear a Perros y dar premios', completada: false },
    { id: 3, nombre: 'Llenar comederos a Michis', completada: false },
    { id: 4, nombre: 'Revisar Mail', completada: false }
];
let proximoId = tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1;

window.addEventListener('DOMContentLoaded', () => {
    actualizaToDo();
});

function actualizaToDo() {
    let html = "";
    tareas.forEach(tarea => {
        html += `
        <tr>
            <td>${tarea.id}</td>
            <td style="${tarea.completada ? 'text-decoration: line-through;' : ''}">${tarea.nombre}</td>
            <td>
                <input type="checkbox" onchange="marcarCompletada(${tarea.id})" ${tarea.completada ? 'checked' : ''}>
            </td>
            <td>
            <button class="btn btn-sm border-0 bg-transparent" onclick="borrar(${tarea.id})">
            <span class="text-danger">✖</span>
            </button>
            </td>
        </tr>`;
    });
    ToDo.innerHTML = html;
    const tareasCompletadas = tareas.filter(t => t.completada).length;
    contar.textContent = tareas.length;
    TListas.textContent = tareasCompletadas;
}

btnagregar.addEventListener("click", () => {
    const tarea = inputToDo.value.trim();
    if (tarea !== "") {
        tareas.push({
            id: proximoId++,
            nombre: tarea,
            completada: false
        });
        inputToDo.value = "";
        actualizaToDo();
    }
});

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    actualizaToDo();
}

function marcarCompletada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        actualizaToDo();
    }
}