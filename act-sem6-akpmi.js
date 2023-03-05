let personas = [
  { nombre: "Juan", edad: 22},
  { nombre: "Ana", edad: 17},
  { nombre: "Luis", edad: 20 },
  { nombre: "Maria", edad: 22},
  { nombre: "Pedro", edad: 45 },
  { nombre: "Sara", edad: 15},
  { nombre: "Carlos", edad: 17},
  { nombre: "Eva", edad: 14},
  { nombre: "Javier", edad: 19},
  { nombre: "Isabel", edad: 20},
  { nombre: "Antonio", edad: 17 },
  { nombre: "Cristina", edad: 17 },
  { nombre: "Manuel", edad: 16 },
  { nombre: "Laura", edad: 31},
  { nombre: "Miguel", edad: 33},
];

function filtrarMayoresDeEdad(personas) {
  let personasMayores = [];
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad > 18) {
      personasMayores.push(personas[i]);
    }
  }
  return personasMayores;
}

let personasMayores = filtrarMayoresDeEdad(personas);
console.log("personas mayores de 18: ", personasMayores);

function duplicarEdades(personas) {
  let personasDuplicadas = [];
  for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    let personaDuplicada = {
      nombre: persona.nombre,
      edad: persona.edad * 2,
    };
    personasDuplicadas.push(personaDuplicada);
  }
  return personasDuplicadas;
}

let personasDuplicadas = duplicarEdades(personas);
console.log("Lista de personas con la edad duplicada",personasDuplicadas);


