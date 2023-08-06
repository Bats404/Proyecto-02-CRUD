//VARIABLES
const nombreUI = document.querySelector("#nombre")
const telefonoUI = document.querySelector("#telefono")
const diaUI = document.querySelector("#dia")
const agendarBTN = document.querySelector("#btn")
const mostrar = document.querySelector(".mostrar")

//EVENTOS
enviarBTN.addEventListener("click", agendarBTN)

//FUNCIONES
function agregar(event) {
  event.preventDefault()

  const objeto = {
    nombre: nombreUI.value,
    telefono: telefonoUI.value,
    dia: diaUI.value,
  }
  datos = JSON.parse(localStorage.getItem("valores"))
}
