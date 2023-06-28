
class planeta {
  constructor(nombre,bit,precio,Sidescuento){
      this.nombre = nombre;
      this.bit = bit;
      this.precio = precio;
      this.Sidescuento = Sidescuento;
      this.vendido = false;
          }
       vendido(){
        this.vendido = true;
       }
}

let jupiter = new planeta ("Jupiter",3,5000000);

let marte = new planeta ("Marte",4,800000);

let ciudadEspacial = new planeta ("Ciudad Espaical kfa.77",3,500000)

let urano = new planeta ("Urano",3,8000000)

let venus = new planeta ("Venus",3,5000000)

let mercurio = new planeta ("Mercurio",3,5000000)

let saturno = new planeta ("Saturno",3,5000000);

let neptuno = new planeta ("Neptuno",3,5000000)

 
  //  array de tarjetas

  const tarjetas = [jupiter, marte, urano, ciudadEspacial, venus, mercurio, saturno, neptuno];


/////////////////////////////////////////////////////////////////////

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
  guardarReserva(jupiter);

swal('Reserva de pasaje a Jupiter realizada correctamente.', {
  icon: 'success',
});
});

btnMarte.addEventListener('click', ()=> {
  guardarReserva(marte);

 swal('Reserva de pasaje a Marte realizada correctamente.', {
  icon: 'success',
});
});
btnUrano.addEventListener('click', ()=> {
  guardarReserva(urano);

swal('Reserva de pasaje a Urano realizada correctamente.', {
  icon: 'success',
});
});
btnKFA.addEventListener('click', ()=> {
  guardarReserva(ciudadEspacial);
 
 swal('Reserva de pasaje a KFA-ciudad espacial realizada correctamente.', {
  icon: 'success',
});
});
btnMercurio.addEventListener('click', ()=> {
  guardarReserva(mercurio);

swal('Reserva de pasaje a Mercurio realizada correctamente.', {
  icon: 'success',
});
});
btnSaturno.addEventListener('click', ()=> {
  guardarReserva(saturno);

swal('Reserva de pasaje a Saturno realizada correctamente.', {
  icon: 'success',
});
});
btnNeptuno.addEventListener('click', ()=> {
  guardarReserva(neptuno);

  swal('Reserva de pasaje a Neptuno realizada correctamente.', {
    icon: 'success',
  });
});

Object.keys(jupiter).forEach(function (key){
  let value = jupiter[key];
  console.log(key,value )
});


