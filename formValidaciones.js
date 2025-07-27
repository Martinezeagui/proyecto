function validateForm() {
    const name = document.getElementById('Nombre').value;
    const email = document.getElementById('mail').value;
    let isValid = true;

    if(name.trim()==='') {
        showError('empty-name' , 'El nombre es obligatorio');
        isValid = false;
    } else{
        hideError('empty-name');
    }
    if(email.trim()==='') {
        showError('empty-mail' , 'El mail es obligatorio');
        isValid = false;
    } else{
        hideError('empty-mail');
    }

    return isValid

}

function showError(fieldid, message) {
    const errorElement = document.getElementById(fieldid + '-error')
    errorElement.textContent = "❌" + message;
    errorElement.style.display = 'block';

}

function hideError(fieldid) {
    const errorElement = document.getElementById(fieldid + '-error')
    errorElement.style.display = 'none'

}

const btnEnviar = document.getElementById( 'btnEnviar');
btnEnviar.addEventListener('click',function(event) {
    event.preventDefault;
    if(validateForm()){
        window.location.href = "C:\proyecto tec\valExitosa.html";

    }

});
