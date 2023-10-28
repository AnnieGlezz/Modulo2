// Ejercicio 1: Imprimir números impares del 1 al 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  // Ejercicio 2: Mostrar nombres de Pokémon cuyos números son múltiplos de 5 hasta un número ingresado por el usuario
  const pokemons = [
    { numero: 1, nombre: "Bulbasaur" },
    { numero: 2, nombre: "Ivysaur" },
    // ... (la lista completa se encuentra en el enlace proporcionado)
  ];
  
  const numeroUsuario = parseInt(prompt("Ingresa un número:"));
  
  for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0 && pokemons[i - 1]) {
      console.log(pokemons[i - 1].nombre);
    }
  }
  
  // Ejercicio 3: Mostrar elementos numéricos de un arreglo
  const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
  
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
      console.log(arreglo[i]);
    }
  }
  
