
function guardar() {
  localStorage.setItem("nombre", JSON.stringify(nombre.value));
  localStorage.setItem("password", JSON.stringify(password.value));
  //    localStorage.setItem("nombre", nombre.value);
  //    localStorage.setItem("password", password.value);
}

function llamar() {
  // let nombre = JSON.parse(localStorage.getItem("nombre"));
  // let password = JSON.parse(localStorage.getItem("password"));
  let nombre = localStorage.getItem("nombre");
  let password = localStorage.getItem("password");
  console.log(nombre);
  console.log(password);
  //document.getElementById("nombre").innerHTML = nombre;
  //document.getElementById("password").innerHTML = password;
  document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
}

function guardarS() {
  sessionStorage.setItem("nombre", JSON.stringify(nombre.value));
  sessionStorage.setItem("password", JSON.stringify(password.value));

}

function llamarS() {
  ;
  let nombre = sessionStorage.getItem("nombre");
  let password = sessionStorage.getItem("password");
  console.log(nombre);
  console.log(password);
  document.getElementById("datosS").innerHTML = "Nombre: " + sessionStorage.nombre + "<br/> Password: " + sessionStorage.password;
}