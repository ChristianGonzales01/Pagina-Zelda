document.addEventListener("DOMContentLoaded", function () {
    // Esperar a que el DOM esté completamente cargado

    // Obtener el formulario y los campos por su ID
    const loginForm = document.getElementById("loginForm");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");

    // Obtener los elementos de mensaje de error por su ID
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Obtener el botón "Registrarse" por su ID
    const registerButton = document.getElementById("registerButton");

    // Obtener el elemento del mensaje "Registrado"
    const registeredMessage = document.getElementById("registeredMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Limpiar los mensajes de error previos
            usernameError.textContent = "";
            passwordError.textContent = "";

            // Obtener los valores de los campos
            const username = usernameField.value;
            const password = passwordField.value;

            let hasError = false;

            if (username.trim() === "") {
                usernameError.textContent = "Por favor, ingresa tu nombre de usuario.";
                hasError = true;
            }

            if (password.trim() === "") {
                passwordError.textContent = "Por favor, ingresa tu contraseña.";
                hasError = true;
            }

            if (hasError) {
                return; // No continua si hay errores
            }

            if (username === "Quique" && password === "Kike123") {
                // Credenciales válidas, redireccionar a PaginaInicio.html
                window.location.href = "PaginaInicio.html";
            } else {
                usernameError.textContent = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
                passwordField.value = ""; // Limpiar el campo de contraseña
            }
        });

        // Agregar un evento de clic al botón "Registrarse"
        registerButton.addEventListener("click", function () {
            // Mostrar el mensaje de "¡Registrado!"
            registeredMessage.style.display = "block";

            // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
            setTimeout(function () {
                registeredMessage.style.display = "none";
            }, 3000);
        });
    }
});
