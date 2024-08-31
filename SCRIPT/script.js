document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // Limpia los mensajes de error previos
    clearErrors();

    if (validateForm(name, phone, email, password)) {
        alert('Formulario enviado con éxito');
        // Aquí puedes enviar el formulario
        this.submit(); // Remueve el preventDefault() para enviar el formulario
    }
});

function validateForm(name, phone, email, password) {
    let isValid = true;

    // Validar el nombre
    if (name === "") {
        document.getElementById('nameError').textContent = "El nombre es obligatorio";
        isValid = false;
    }

    // Validar el teléfono
    let phonePattern = /^[0-9]{10}$/; // Ejemplo para un número de 10 dígitos
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = "Ingresa un número de teléfono válido de 10 dígitos";
        isValid = false;
    }

    // Validar el correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Ingresa un correo electrónico válido";
        isValid = false;
    }

    // Validar la contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "La contraseña debe tener al menos 6 caracteres";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.getElementById('nameError').textContent = "";
    document.getElementById('phoneError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('passwordError').textContent = "";
}