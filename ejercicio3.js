/ Ejercicio 1
const numero1 = parseInt(prompt("Ejercicio 1: Ingrese un número:"));
console.log("Múltiplos de 5 hasta " + numero1 + ":");
for (let i = 1; i <= numero1; i++) {
  if (i % 5 === 0) {
    console.log("i");
  }
}

// Ejercicio 2
const numero2_1 = parseInt(prompt("Ejercicio 2: Ingrese el primer número (entre 1 y 50):"));
const numero2_2 = parseInt(prompt("Ejercicio 2: Ingrese el segundo número (entre 1 y 50):"));
console.log("Números del 1 al 50 con '¡Lotería!':");
for (let i = 1; i <= 50; i++) {
  if (i === numero2_1 || i === numero2_2) {
    console.log(`¡Lotería! ${i}`);
  } else {
    console.log(i);
  }
}

// Ejercicio 3
const numeros = [];
let numero3;
do {
  numero3 = parseInt(prompt("Ejercicio 3: Ingrese un número (0 para finalizar):"));
  if (numero3 !== 0) {
    numeros.push(numero3);
  }
} while (numero3 !== 0);
console.log("Ejercicio 3: Números capturados: " + numeros.join(", "));

// Ejercicio 4
const palabras = [];
let palabra4;
do {
  palabra4 = prompt("Ejercicio 4: Ingrese una palabra (deje en blanco para finalizar):");
  if (palabra4 !== "") {
    palabras.push(palabra4);
  }
} while (palabra4 !== "");
console.log("Ejercicio 4: Palabras capturadas: " + palabras.join(" "));

// Ejercicio 5
let dia5;
do {
  dia5 = prompt("Ejercicio 5: Ingrese un día de la semana:");
  if (dia5) {
    switch (dia5.toLowerCase()) {
      case "domingo":
        alert("Ve a descansar");
        break;
      case "lunes":
        alert("Es el primer día laboral de la semana.");
        break;
      case "martes":
        alert("Ánimo, es martes.");
        break;
      // Agrega más casos para los demás días de la semana
      default:
        alert("No reconocemos ese día.");
        break;
    }
  }
} while (dia5 && dia5.toLowerCase() !== "domingo");
