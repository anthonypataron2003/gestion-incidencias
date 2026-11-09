const form = document.getElementById("form-incidencia");
const lista = document.getElementById("lista");
const filtroEstado = document.getElementById("filtro-estado");
function obtenerIncidencias() {
  return JSON.parse(localStorage.getItem("incidencias") || "[]");
}

function guardarIncidencias(incidencias) {
  localStorage.setItem("incidencias", JSON.stringify(incidencias));
}

function cambiarEstado(id, nuevoEstado) {
  const incidencias = obtenerIncidencias();
  const inc = incidencias.find((i) => i.id === id);
  if (inc) {
    inc.estado = nuevoEstado;
    guardarIncidencias(incidencias);
    mostrarIncidencias();
  }
}

function mostrarIncidencias() {
  const filtro = filtroEstado.value;
  const todas = obtenerIncidencias();
  const incidencias =
    filtro === "Todas" ? todas : todas.filter((i) => i.estado === filtro);

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
      <select onchange="cambiarEstado(${inc.id}, this.value)">
        <option ${inc.estado === "Abierta" ? "selected" : ""}>Abierta</option>
        <option ${inc.estado === "En proceso" ? "selected" : ""}>En proceso</option>
        <option ${inc.estado === "Resuelta" ? "selected" : ""}>Resuelta</option>
      </select>
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

filtroEstado.addEventListener("change", mostrarIncidencias);

mostrarIncidencias();