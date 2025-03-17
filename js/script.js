const formularioUsuariosBtn = document.getElementById(
  "formulario_usuarios-btn"
);
const formuUsuarios = document.getElementById("formu_usuarios");

document.addEventListener("DOMContentLoaded", function () {
  // Verifica que los elementos existan antes de añadir el evento
  if (formularioUsuariosBtn && formuUsuarios) {
    formularioUsuariosBtn.addEventListener("click", function () {
      formuUsuarios.classList.toggle("d-inline");
    });
  } else {
    console.error(
      "No se encontraron los elementos con IDs 'formulario-usuarios' o 'formu_usuarios'."
    );
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");
  nav_01.classList.toggle("d-none");
  const menu_1 = document.getElementById("menu_1");
  menu_1.classList.toggle("w-auto");
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");
  nav_01.classList.toggle("d-none-mobile");
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");

  // Alterna la clase que permite mostrar el div solo en móviles
  nav_01.classList.toggle("d-visible-mobile");
});

// cerrar sesión"
fetch("cerrar-sesion.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cerrar-sesion").innerHTML = data;
  })
  .catch((error) => console.error("Error cargando el header:", error));

// Menu principalS"
fetch("menu-principal.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav_01").innerHTML = data;
  })
  .catch((error) => console.error("Error cargando el header:", error));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formUsuarios");
  const modalAcceptBtn = document.getElementById("modal-accept-btn");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    }
    form.classList.add("was-validated");
    agregarUsuario();
  });

  // Agregar el evento al botón "Aceptar" para resetear el formulario
  modalAcceptBtn.addEventListener("click", function () {
    form.reset();
    form.classList.remove("was-validated"); // Quitar la clase de validación para reiniciar el estilo
    const formuUsuarios = document.getElementById("formu_usuarios");
    formuUsuarios.classList.toggle("d-inline");
  });
});

//Json con usuarios de prueba
const usuariosRegistrados = [
 
  {
    nombre: "Yonatan",
    apellido: "Martinez",
    identificacion: "1001001002",
    direccion: "manz 1 call 2 -55",
    telefono: "315444210",
    whatsap: "315444210",
    correo: "yonatan@dominio.com",
    estado: "Activo",
  },
  {
    nombre: "Juanita",
    apellido: "Portilla",
    identificacion: "1001001002",
    direccion: "manz 2 call 22 -56",
    telefono: "315444211",
    whatsap: "315444211",
    correo: "Juanita@dominio.com",
    estado: "Activo",
  },
  {
    nombre: "Ricardo",
    apellido: "Grijalba",
    identificacion: "1001001003",
    direccion: "manz 5 call 5 -2",
    telefono: "315444213",
    whatsap: "315444213",
    correo: "Ricardo@dominio.com",
    estado: "Activo",
  },
  {
    nombre: "Andrea",
    apellido: "Bravo",
    identificacion: "1001001002",
    direccion: "manz 6 call 11 -99",
    telefono: "315444214",
    whatsap: "315444214",
    correo: "Andrea@dominio.com",
    estado: "Inactivo",
  },
  {
    nombre: "Marian",
    apellido: "Martinez",
    identificacion: "1001001005",
    direccion: "manz 78 call 2 -38",
    telefono: "315444215",
    whatsap: "315444215",
    correo: "Marian@dominio.com",
    estado: "Inactivo",
  },
];




 
// Función para agregar usuarios a la tabla
function cargarUsuarios() {
  // Seleccionar la tabla
  let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
  //Se itera los elementos del Json para llenar la tabla
  usuariosRegistrados.forEach((usuario) => {
    
    let fila = tabla.insertRow();

    let celdaNumeroFila = fila.insertCell(0);
    let celdaNombres = fila.insertCell(1);
    let celdaIdentificacion = fila.insertCell(2);
    let celdaDireccion = fila.insertCell(3);
    let celdaTelefono = fila.insertCell(4);
    let celdaWhatsap = fila.insertCell(5);
    let celdaCorreo = fila.insertCell(6);
    let celdaEstado = fila.insertCell(7);
    let celdaEditar = fila.insertCell(8);
    let celdaEliminar = fila.insertCell(9);

    celdaNombres.textContent = `${usuario.nombre} ${usuario.apellido}`;
    celdaIdentificacion.textContent = usuario.identificacion;
    celdaDireccion.textContent = usuario.direccion;
    celdaTelefono.textContent = usuario.telefono;
    celdaWhatsap.textContent = usuario.whatsap;
    celdaCorreo.textContent = usuario.correo;
    celdaEstado.textContent = usuario.estado;

    // Obtener el número de filas actuales (para la numeración)
    let numFila = tabla.rows.length;
    // Crear celda para la numeración como <th scope="row">
    celdaNumeroFila.outerHTML = `<th scope="row">${numFila}</th>`;

    // Crear botón de editar con ícono
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
        <path d="M13.5 6.5l4 4" />
    </svg>
`;
    botonEditar.style.border = "none";
    botonEditar.style.background = "none";
    botonEditar.style.cursor = "pointer";
    botonEditar.style.color = "#0d6efd";
    botonEditar.onclick = function () {
      alert("Editar fila " + fila.rowIndex);
    };

    celdaEditar.appendChild(botonEditar);

    // Crear botón de eliminar con ícono
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 7l16 0" />
        <path d="M10 11l0 6" />
        <path d="M14 11l0 6" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2l8 0a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7l0 -3l6 0l0 3" />
    </svg>
`;
    botonEliminar.style.border = "none";
    botonEliminar.style.background = "none";
    botonEliminar.style.cursor = "pointer";
    botonEliminar.style.color = "#0d6efd";
    botonEliminar.onclick = function () {
      let fila = this.closest("tr"); // Encuentra la fila más cercana
      let confirmacion = confirm(
        "¿Estás seguro de que quieres eliminar esta fila?"
      );
      if (confirmacion) {
        fila.remove(); // Elimina la fila correctamente
        actualizarNumeracion();
      }
    };

    celdaEliminar.appendChild(botonEliminar);

    //  Alinear al centro y agregar espacio entre botones
    celdaEditar.style.margin = "auto";
    celdaEliminar.style.textAlign = "center";
  });
}

// Llamar a la función para llenar la tabla
cargarUsuarios();

function agregarUsuario() {
  // Obtener los valores de los inputs
  let nombre = document.getElementById("form1-usarios-nombre").value;
  let apellido = document.getElementById("form1-usarios-apellido").value;
  let nombres = `${nombre} ${apellido}`;
  let identificacion = "-";
  let direccion = "-";
  let telefono = "-";
  let whatsap = "-";
  let correo = "-";
  let estado = "-";

  // Validar que los campos no estén vacíos
  if (nombre.trim() === "" || apellido.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Obtener la tabla y su cuerpo
  let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];

  // Crear una nueva fila
  let nuevaFila = tabla.insertRow();
  // Insertar celdas en la fila
  let celdaNumeroFila = nuevaFila.insertCell(0);
  let celdaNombres = nuevaFila.insertCell(1);
  let celdaIdentificacion = nuevaFila.insertCell(2);
  let celdaDireccion = nuevaFila.insertCell(3);
  let celdaTelefono = nuevaFila.insertCell(4);
  let celdaWhatsap = nuevaFila.insertCell(5);
  let celdaCorreo = nuevaFila.insertCell(6);
  let celdaEstado = nuevaFila.insertCell(7);
  let celdaEditar = nuevaFila.insertCell(8);
  let celdaEliminar = nuevaFila.insertCell(9);

  // Asignar valores a las celdas
  // celdaNumeroFila.textContent = numerofila;
  celdaNombres.textContent = nombres;
  celdaIdentificacion.textContent = identificacion;
  celdaDireccion.textContent = direccion;
  celdaTelefono.textContent = telefono;
  celdaWhatsap.textContent = whatsap;
  celdaCorreo.textContent = correo;
  celdaEstado.textContent = estado;

  // Obtener el número de filas actuales (para la numeración)
  let numFila = tabla.rows.length;

  // Crear celda para la numeración como <th scope="row">
  celdaNumeroFila.outerHTML = `<th scope="row">${numFila}</th>`;

  // Crear botón de editar con ícono
  let botonEditar = document.createElement("button");
  botonEditar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
        <path d="M13.5 6.5l4 4" />
    </svg>
`;
  botonEditar.style.border = "none";
  botonEditar.style.background = "none";
  botonEditar.style.cursor = "pointer";
  botonEditar.style.color = "#0d6efd";
  botonEditar.onclick = function () {
    alert("Editar fila " + nuevaFila.rowIndex);
  };

  celdaEditar.appendChild(botonEditar);

  // Crear botón de eliminar con ícono
  let botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 7l16 0" />
        <path d="M10 11l0 6" />
        <path d="M14 11l0 6" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2l8 0a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7l0 -3l6 0l0 3" />
    </svg>
`;
  botonEliminar.style.border = "none";
  botonEliminar.style.background = "none";
  botonEliminar.style.cursor = "pointer";
  botonEliminar.style.color = "#0d6efd";
  botonEliminar.onclick = function () {
    let fila = this.closest("tr"); // Encuentra la fila más cercana
    let confirmacion = confirm(
      "¿Estás seguro de que quieres eliminar esta fila?"
    );
    if (confirmacion) {
      fila.remove(); // Elimina la fila correctamente
      actualizarNumeracion();
    }
  };

  celdaEliminar.appendChild(botonEliminar);

  //  Alinear al centro y agregar espacio entre botones
  celdaEditar.style.margin = "auto";
  celdaEliminar.style.textAlign = "center";
}

// Función para actualizar la numeración después de eliminar una fila
function actualizarNumeracion() {
  let filas = tabla.rows;
  for (let i = 1; i < filas.length; i++) {
    // Saltamos la cabecera
    filas[i].cells[0].innerHTML = `<th scope="row">${i}</th>`;
  }
}
