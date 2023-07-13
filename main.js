console.log(document.title);

let i1Nom1 = document.querySelector("#i1Nom1").textContent;
let i1Nom2 = document.querySelector("#i1Nom2").textContent;
let i1Ape1 = document.querySelector("#i1Ape1").textContent;
let i1Ape2 = document.querySelector("#i1Ape2").textContent;

let i2Nom1 = document.querySelector("#i2Nom1").textContent;
let i2Nom2 = document.querySelector("#i2Nom2").textContent;
let i2Ape1 = document.querySelector("#i2Ape1").textContent;
let i2Ape2 = document.querySelector("#i2Ape2").textContent;

i1 = [i1Nom1, i1Nom2, i1Ape1, i1Ape2];
i2 = [i2Nom1, i2Nom2, i2Ape1, i2Ape2];

function eliminarEspaciosVacios(array) {
  let espacioVacio = array.indexOf("");
  if (espacioVacio !== -1) {
    array.splice(espacioVacio, 1);
  }
  return;
}

function mostrarIntegrantes(i1, i2) {
  for (let i = 2; i < i1.length; i++) {
    i1[i] = i1[i].toUpperCase();
    i2[i] = i2[i].toUpperCase();
  }
  let integrante1 = i1.join(" ");
  let integrante2 = i2.join(" ");
  console.log(`
-----
Integrante 1: "${integrante1}" 
Integrante 2: "${integrante2}"
-----`);
  return;
}

function devolverNombres(i1, i2) {
  let i1Nombres = i1.filter((el) => el === i1Nom1 || el === i1Nom2);
  let i2Nombres = i2.filter((el) => el === i2Nom1 || el === i2Nom2);
  return i1Nombres, i2Nombres;
}

function devolverApellidos(i1, i2) {
  let i1Apellidos = i1.splice(0, 2);
  let i2Apellidos = i2.splice(0, 2);
  return i1Apellidos, i2Apellidos;
}

function comparaNombres(i1, i2) {
  let coincidencia = false;
  for (let i = 0; i < i1.length - 2; i++) {
    for (let j = 0; j < i2.length - 2; j++) {
      if (i1[i] === i2[j]) {
        const posCoincI1 = i1.findIndex((element) => element === i1[i]);
        const posCoincI2 = i2.findIndex((element) => element === i2[j]);
        let color = prompt(`Hay coincidencia en los NOMBRES de los integrantes.
        Coincidencia: ${i1[i].toUpperCase()} \n
        Ingrese un color para resaltarlas`);
        document.querySelector(`#i1Nom${posCoincI1 + 1}`).style.color = color;
        document.querySelector(`#i2Nom${posCoincI2 + 1}`).style.color = color;
        document.querySelector(`#i1Nom${posCoincI1 + 1}`).style.fontWeight =
          "bold";
        document.querySelector(`#i2Nom${posCoincI2 + 1}`).style.fontWeight =
          "bold";
        coincidencia = true;
      }
    }
  }
  if (coincidencia === false) {
    console.log("No hubo coincidencia en los NOMBRES.");
  }
}

function comparaApellidos(i1, i2) {
  let coincidencia = false;
  for (let i = 0; i < i1.length; i++) {
    for (let j = 0; j < i2.length; j++) {
      if (i1[i] === i2[j]) {
        const posCoincI1 = i1.findIndex((element) => element === i1[i]);
        const posCoincI2 = i2.findIndex((element) => element === i2[j]);
        let color =
          prompt(`Hubo coincidencia en los APELLIDOS de los integrantes. 
        Coincidencia: ${i1[i]} \n
        Ingrese un color para resaltarlas`);
        document.querySelector(`#i1Ape${posCoincI1 + 1}`).style.color = color;
        document.querySelector(`#i2Ape${posCoincI2 + 1}`).style.color = color;
        document.querySelector(`#i1Ape${posCoincI1 + 1}`).style.fontWeight =
          "bold";
        document.querySelector(`#i2Ape${posCoincI2 + 1}`).style.fontWeight =
          "bold";
        coincidencia = true;
      }
    }
  }
  if (coincidencia === false) {
    console.log("No hubo coincidencia en los APELLIDOS.");
  }
}

eliminarEspaciosVacios(i1, i2);
mostrarIntegrantes(i1, i2);

devolverNombres(i1, i2);
comparaNombres(i1, i2);

let confirmacion = confirm(`¿Desea comparar los apellidos?`);

if (confirmacion) {
  devolverApellidos(i1, i2);
  comparaApellidos(i1, i2);
} else {
  console.log("No coinciden los apellidos");
}