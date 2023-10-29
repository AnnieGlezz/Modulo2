
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  
  const pokemons = [
    { numero: 1, nombre: "Bulbasaur" },
    { numero: 2, nombre: "Ivysaur" },
    
  ];
  
  const numeroUsuario = parseInt(prompt("Ingresa un número:"));
  
  for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0 && pokemons[i - 1]) {
      console.log(pokemons[i - 1].nombre);
    }
  }
  
 
  const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
  
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
      console.log(arreglo[i]);
    }
  }
  
