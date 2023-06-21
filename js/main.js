
// Solicitar nombre
let nombre = prompt("Ingresa tu nombre:");

// Solicitar correo electrónico y validar si se ingresó un "@" utilizando un bucle while
let correo = '';
while (!correo.includes('@')) {
  correo = prompt("Ingresa tu correo electrónico (debe contener '@'):");
}

// Solicitar contraseña
let contraseña = prompt("Ingresa tu contraseña:");

// Obtener la fecha actual
const fecha = new Date();

// Crear un objeto con los datos ingresados y la fecha
const datos = {
  nombre,
  correo,
  contraseña,
  fecha
};

// Convertir el objeto a cadena de texto JSON
const datosJSON = JSON.stringify(datos);

// Guardar los datos en el SessionStorage
localStorage.setItem("datos", datosJSON);

// Mostrar una alerta de éxito
alert("Los datos se han guardado exitosamente... bienvenido .");









 function solicitarCredenciales() {
    // Mostrar SweetAlert prompt para solicitar correo electrónico y contraseña
    Swal.fire({
      title: 'Iniciar sesión',
      html:
        '<input id="swal-input-email" class="swal2-input" placeholder="Correo electrónico">' +
        '<input id="swal-input-password" class="swal2-input" type="password" placeholder="Contraseña">',
      showCancelButton: true,
      confirmButtonText: 'Iniciar sesión',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        // Obtener los valores ingresados por el usuario
        const email = document.getElementById('swal-input-email').value;
        const password = document.getElementById('swal-input-password').value;

        // Validar que se hayan ingresado correo y contraseña
        if (!email || !password) {
          Swal.showValidationMessage('Por favor, ingresa un correo electrónico y una contraseña');
        }

        // Devolver los valores ingresados
        return { email, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { email, password } = result.value;

        // Guardar correo y contraseña en el Local Storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        Swal.fire('Iniciaste sesión correctamente', '', 'success');
      }
    });
  }

  // Llamar a la función para solicitar las credenciales
  solicitarCredenciales();

  // Alerta al cargar la página
  window.onload = function() {
    alert('Bienvenido a la página');
  };

  /* sadasdsa */

  
document.addEventListener('DOMContentLoaded', function() {
  
  let formulario = document.querySelector('form');
  let botonEnviar = document.querySelector('.fondo__black');
  let divRegistrarse = document.querySelector('.registrate');


  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

  
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;

    
    if (nombre && correo && contraseña) {
    
      let usuario = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
      };

    
      let usuarioJSON = JSON.stringify(usuario);

      
      sessionStorage.setItem('usuario', usuarioJSON);

      
      divRegistrarse.innerHTML = '<h1>Bienvenido ' + nombre + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                  '<hr>' +
                                  '<p><strong>El registro es necesario</strong> para garantizar la seguridad de la página y de los usuarios.</p>';

      
      formulario.reset();
    }
  });

  
  let usuarioJSONGuardado = sessionStorage.getItem('usuario');
  if (usuarioJSONGuardado) {
    
    let usuarioGuardado = JSON.parse(usuarioJSONGuardado);

    
    let nombreGuardado = usuarioGuardado.nombre;

    
    divRegistrarse.innerHTML = '<h1>Bienvenido ' + nombreGuardado + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                '<hr>' +
                                '<p> registrado exitosamente </p>';
  }
});


document.addEventListener("DOMContentLoaded",function() {  
  const cami = document.getElementById("ese");
  console.log(cami.innerHTML); 
});
