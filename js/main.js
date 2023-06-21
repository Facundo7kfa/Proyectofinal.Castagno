
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