document.addEventListener("DOMContentLoaded", function () {
    const semaforo = document.querySelector(".semaforo");
    const cambiarSemaforoBtn = document.getElementById("cambiarSemaforo");
    const luces = document.querySelectorAll(".luz");

    let indexLuz = 2; // Comenzar con la luz verde encendida

    cambiarSemaforoBtn.addEventListener("click", function () {
        luces[indexLuz].classList.remove("encendida");
        indexLuz = (indexLuz - 1 + 3) % 3; // Retroceder en la secuencia
        luces[indexLuz].classList.add("encendida");
    });

    luces[indexLuz].classList.add("encendida");
});
