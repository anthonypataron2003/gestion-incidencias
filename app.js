const form = document.getElementById("form-incidencia");
const lista = document.getElementById("lista");

function obtenerIncidencias() {
  return JSON.parse(localStorage.getItem("incidencias") || "[]");
}

function guardarIncidencias(incidencias) {
  localStorage.setItem("incidencias", JSON.stringify(incidencias));
}

function mostrarIncidencias() {
  const incidencias = obtenerIncidencias();
  lista.innerHTML = "";

  if (incidencias.length === 0) {
    lista.innerHTML = '<li class="vacio">No hay incidencias registradas.</li>';
    return;
  }

  incidencias.forEach((inc) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>#${inc.id} - ${inc.titulo}</strong>
      <span class="estado">${inc.estado}</span><br>
      <small>Prioridad: ${inc.prioridad}</small>
      <p>${inc.descripcion}</p>
    `;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const incidencias = obtenerIncidencias();

  incidencias.push({
    id: incidencias.length + 1,
    titulo: document.getElementById("titulo").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    prioridad: document.getElementById("prioridad").value,
    estado: "Abierta",
  });

  guardarIncidencias(incidencias);
  form.reset();
  mostrarIncidencias();
});

mostrarIncidencias();