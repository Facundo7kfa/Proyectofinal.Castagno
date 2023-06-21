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

