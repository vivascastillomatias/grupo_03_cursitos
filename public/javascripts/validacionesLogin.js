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
        //falta resolver porque no actúa el preventDefault
    event.preventDefault();
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let validacionEmail = noVacio(email);
    let validacionPassword = noVacio(password) 

    if (validacionEmail && validacionPassword) {
        this.submit();
    }
    });
});