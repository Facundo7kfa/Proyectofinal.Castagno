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

