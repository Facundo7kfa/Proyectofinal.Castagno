document.getElementById("Venus").addEventListener("click",  ()=> {
    // Comprobar si el usuario está autorizado
    let usuarioAutorizado = false; // Cambia esto a true si el usuario está autorizado
  
    if (!usuarioAutorizado) {
      // Crear el div de error
      let mensajeError = document.createElement("div");
      mensajeError.innerHTML = "Error: Usted no es personal militar autorizado.";
      mensajeError.style.color = "red";
  
      // Insertar el div de error después del botón
      let boton = document.getElementById("Venus");
      boton.parentNode.insertBefore(mensajeError, boton.nextSibling);
    }
  });


  // evento caputra planetas 

  document.getElementById("dropdownMenuLink").addEventListener("click", function(event) {
    event.preventDefault(); 
  
    // Realiza la llamada a la API para obtener más planetas
    cargarMasPlanetas();
  });


  let nextPageUrl = "https://swapi.dev/api/planets/";

function cargarMasPlanetas() {
  fetch(nextPageUrl)
    .then(response => response.json())
    .then(data => {
      // Maneja los datos de respuesta
      if (data.next) {
        // Hay más páginas de resultados
        nextPageUrl = data.next;
        let nuevosPlanetas = data.results;
        // Aquí puedes mostrar los nuevos planetas en tu página HTML, por ejemplo:
        mostrarNuevosPlanetas(nuevosPlanetas);
      } else {
        // No hay más páginas de resultados
        alert("No hay más planetas disponibles.");
      }
    })
    .catch(error => {
      // Maneja los errores de la llamada a la API
      console.error("Error al cargar más planetas:", error);
    });
}

function mostrarNuevosPlanetas(nuevosPlanetas) {
  let listaPlanetas = document.getElementById("listaPlanetas");

  nuevosPlanetas.forEach(planeta => {
    let item = document.createElement("li");
    item.innerHTML = `Planeta: <h2> ${planeta.name} </h2>
    <p>  Período de rotación: ${planeta.rotation_period} </p>
    <p>población: ${planeta.population}</p>`
    listaPlanetas.appendChild(item);
  });
}
////////////////////////////////////////

// Función para guardar la reserva en el localStorage
function guardarReserva(planeta, precio) {
  // Obtener las reservas guardadas en el localStorage (si existen)
  let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

  // Obtener la fecha actual
  const fecha = new Date();

  // Crear un objeto con la información de la reserva
  const reserva = {
    planeta,
    precio,
    fecha
  };

  // Agregar la reserva al arreglo de reservas
  reservas.push(reserva);

  // Guardar el arreglo de reservas en el localStorage
  localStorage.setItem('reservas', JSON.stringify(reservas));
}

// Obtener los botones "reservar pasaje" por su ID
const btnJupiter = document.getElementById('btnJupiter');
const btnMarte = document.getElementById('btnMarte');
const btnUrano = document.getElementById('btnUrano');
const btnKFA = document.getElementById('btnKFA');
const btnMercurio = document.getElementById('btnMercurio');
const btnSaturno = document.getElementById('btnSaturno');
const btnNeptuno = document.getElementById('btnNeptuno');

// Asignar el evento de clic a cada botón
btnJupiter.addEventListener('click', ()=> {
  guardarReserva('Jupiter', '$5000.000');
  alert('Reserva de pasaje a Jupiter realizada correctamente.');
});

btnMarte.addEventListener('click', ()=> {
  guardarReserva('Marte', '$8000.000');
  alert('Reserva de pasaje a Marte realizada correctamente.');
});
btnUrano.addEventListener('click', ()=> {
  guardarReserva('URANO', '$8000.000');
  alert('Reserva de pasaje a Urano realizada correctamente.');
});
btnKFA.addEventListener('click', ()=> {
  guardarReserva('Ciudad Espacial', '$8000.000');
  alert('Reserva de pasaje a KfA-ciudad espacial realizada correctamente.');
});
btnMercurio.addEventListener('click', ()=> {
  guardarReserva('Mercurio', '$8000.000');
  alert('Reserva de pasaje a Mercurio realizada correctamente.');
});
btnSaturno.addEventListener('click', ()=> {
  guardarReserva('Saturno', '$8000.000');
  alert('Reserva de pasaje a Saturno realizada correctamente.');
});
btnNeptuno.addEventListener('click', ()=> {
  guardarReserva('Neptuno', '$8000.000');
  alert('Reserva de pasaje a Neptuno realizada correctamente.');
});
