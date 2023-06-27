/* alternar la visibilidad de los enlaces de navegación cuando se haga clic en el botón “Menú”*/ 
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links"). classList.toggle("nav-links-responsive")}
)

function showAlert() { alert("!hola, esta es una alerta desde JAvaScript¡");}
/* obtenemos el boton por su id */
let boton = document.getElementById("miBoton")
/*Añadimos un oyente de eventos que "escuche" el evento "click"*/
boton.addEventListener("click",function(){
    alert("!Haz hecho clic en el botón¡");
})

/*agregar correo electrinico */
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event)  {
  event.preventDefault();
  validateForm();
} );
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email);
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}
/*fin correo */