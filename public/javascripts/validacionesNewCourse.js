function notEmpty(e) {
    if (e.value) {
        e.className += " is-valid";
        return true
    } else {
        e.className += " is-invalid";
        document.getElementById("errors").innerText = "Los campos marcados no pueden ser vacios!";
        document.getElementById("errors").className = "alert alert-danger"
        document.getElementById("feedback-"+e.id).className = 'invalid-feedback'
        return false
    }
}

window.addEventListener('load', function() {

let submit = document.getElementById('submit')
submit.addEventListener('click', function(event){
 

    let name = document.getElementById('name')
    let description = document.getElementById('description')
    let category = document.getElementById('category')
   // let image = document.getElementById('image')
    let price = document.getElementById('price')

    let nameVal = notEmpty(name)
    let descrpVal = notEmpty(description)
    let catVal = notEmpty(category)
    let imgVal = notEmpty(image)
    let priceVal = notEmpty(price)

    if(nameVal && descrpVal && catVal && priceVal){
        
    } else {event.preventDefault()}

})






})