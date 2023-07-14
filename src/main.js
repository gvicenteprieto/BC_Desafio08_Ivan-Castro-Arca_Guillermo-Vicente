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

function armarNombre(nom1, nom2, ape1, ape2) {
  let integrante = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] != "") {
      integrante += arguments[i] + " ";
    }
  }
  return integrante;
}

let integrante1 =armarNombre(i1Nom1, i1Nom2, i1Ape1.toLocaleUpperCase(), i1Ape2.toLocaleUpperCase());
console.log('-----\nIntegrante 1: "' + integrante1 + '"');
let integrante2 = armarNombre(i2Nom1, i2Nom2, i2Ape1.toLocaleUpperCase(), i2Ape2.toLocaleUpperCase());
console.log('Integrante 2: "' + integrante2 + '"\n-----');

function compararNombres(i1, i2) {
  let coincidencia = false;
  i1 = i1.filter((el) => el === i1Nom1 || el === i1Nom2);
  i2= i2.filter((el) => el === i2Nom1 || el === i2Nom2);
  for (let i = 0; i < i1.length; i++) {
    for (let j = 0; j < i2.length; j++) {
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
        console.log(`Hubo coincidencia en los NOMBRES. Coincidencia: ${i1[i].toUpperCase()}`);
      }
    }
  }
  if (coincidencia === false) {
    console.log("No hubo coincidencia en los NOMBRES.");
  }
}

function compararApellidos(i1, i2) {
  let coincidencia = false;
  i1= i1.filter((el) => el === i1Ape1 || el === i1Ape2);
  i2 = i2.filter((el) => el === i2Ape1 || el === i2Ape2);

  for (let i = 0; i < i1.length; i++) {
    for (let j = 0; j < i2.length; j++) {
      if (i1[i] === i2[j]) {
        const posCoincI1 = i1.findIndex((element) => element === i1[i]);
        const posCoincI2 = i2.findIndex((element) => element === i2[j]);
        let color = prompt(`Hay coincidencia en los APELLIDOS de los integrantes.
        Coincidencia: ${i1[i].toUpperCase()} \n
        Ingrese un color para resaltarlas`);
        document.querySelector(`#i1Ape${posCoincI1 + 1}`).style.color = color;
        document.querySelector(`#i2Ape${posCoincI2 + 1}`).style.color = color;
        document.querySelector(`#i1Ape${posCoincI1 + 1}`).style.fontWeight =
          "bold";
        document.querySelector(`#i2Ape${posCoincI2 + 1}`).style.fontWeight =
          "bold";
        coincidencia = true;
        console.log(`Hubo coincidencia en los APELLIDOS. Coincidencia: ${i1[i].toUpperCase()}`);
      }
    }
  }
  if (coincidencia === false) {
    console.log("No hubo coincidencia en los APELLIDOS.");
  }
}

setTimeout(() => {
  compararNombres(i1, i2);
  let confirmacion = confirm(`¿Desea comparar los apellidos?`);
  if (confirmacion) {
    compararApellidos(i1, i2);
  }
}, 500);