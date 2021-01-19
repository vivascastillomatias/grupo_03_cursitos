function noVacio(e) {
    if (e.value) {
        e.className += " is-valid";
        return true
    } else {
        e.className += " is-invalid";
        document.getElementById("feedback-"+e.id).innerText = 'Ingrese un valor';
        document.getElementById("feedback-"+e.id).className = 'invalid-feedback'
        return false
    }
}
function passwordIguales(e1,e2) {
    if (e1.value === e2.value) {
        e1.className += " is-valid";
        e2.className += " is-valid";
        return true
    } else {
        e1.className += " is-invalid";
        e2.className += " is-invalid";
        document.getElementById("feedback-passwordRepeat").className = 'invalid-feedback'
        document.getElementById("feedback-passwordRepeat").innerText = 'Las contraseñas deben ser iguales';
        return false
    }
}

window.addEventListener("load", function(){
    
    let formulario = document.getElementById("form")
    
    let inputs = document.querySelectorAll("input");
    inputs.forEach(e => {
        e.addEventListener("click", function(){
            this.classList.remove('is-invalid');
            this.classList.remove('is-valid');
        });
    });
    //Agregamos el evento para atraparlo
    formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let email = document.getElementById("email")
    let name = document.getElementById("name")
    let password = document.getElementById("password")
    let passwordRepeat = document.getElementById("passwordRepeat")

    let validacionEmail = noVacio(email);
    let validacionName = noVacio(name);
    let validacionPassword = noVacio(password) && noVacio(passwordRepeat) && passwordIguales(password, passwordRepeat)

    if (validacionEmail && validacionName && validacionPassword) {
        this.submit();
    }
    });
});