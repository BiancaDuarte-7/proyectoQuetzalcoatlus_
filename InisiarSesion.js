document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación básica
    if (email === "bianca@correo.com" && password === "1234") {
        alert("Inicio de sesión exitoso 🎉");

    } else {
        alert("Correo o contraseña incorrectos ❌");
    }
});
});

