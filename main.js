//detalle de acciones tomadas
/* 1. se obtiene el título del documento y se lo imprime por consola */
console.log(document.title);

/* 2. se crean variables para cada uno de los elementos a leer:
    para ello se crea en html un id por cada elemento, y
    desde js se obtiene el elemento por medio de querySelector(#element),
    y se le asigna a cada variable el valor del elemento 
    por medio de la propiedad textContent
*/
//integrante 1
let i1Nom1 = document.querySelector("#i1Nom1").textContent;
let i1Nom2 = document.querySelector("#i1Nom2").textContent;
let i1Ape1 = document.querySelector("#i1Ape1").textContent;
let i1Ape2 = document.querySelector("#i1Ape2").textContent;

//integrante 2
let i2Nom1 = document.querySelector("#i2Nom1").textContent;
let i2Nom2 = document.querySelector("#i2Nom2").textContent;
let i2Ape1 = document.querySelector("#i2Ape1").textContent;
let i2Ape2 = document.querySelector("#i2Ape2").textContent;

/* 3. Se crea un array por cada integrante, 
    y se le asignan a cada array las variables creadas en el paso 2
*/

i1 = [i1Nom1, i1Nom2, i1Ape1, i1Ape2];
i2 = [i2Nom1, i2Nom2, i2Ape1, i2Ape2];

/* 4. Se verifica que no haya espacios vacíos,
    utilizando el método indexOf, 
    que devuelve el índice de la primera ocurrencia del elemento buscado, y si no lo encuentra devuelve -1; 
    si en cambioo es !== -1, se elimina el elemento del array

    Había comenzado con condicionales, lo pasé a 
    una función para reutilizarla en ambos integrantes
*/

function eliminarEspaciosVacios(array) {
    let espacioVacio = array.indexOf("");
    if (espacioVacio !== -1) {
        array.splice(espacioVacio, 1);
    }
    return;
}

//eliminarEspaciosVacios(i1)
eliminarEspaciosVacios(i1, i2);

/* 4. Se crea función que recibe como parámetros los arrays de cada integrante
    y se crea una variable por cada array 
    uniendo los elementos del array por un espacio
    utilizando el método join.
    Se imprime por consola cada variable creada
*/

function mostrarIntegrantes(i1, i2) {
    let integrante1 = i1.join(" ");
    let integrante2 = i2.join(" ");
    console.log(`
   -----
   Integrante 1: "${integrante1}" 
   Integrante 2: "${integrante2}"
   -----`);
    return;
}

mostrarIntegrantes(i1, i2);

/* 5. Se verifica si los nombres de los integrantes coinciden
    utilizando estructuras condicionales
    y se imprime por consola el resultado

    Este código se mejoró con el punto 6, 
    ya que permite verificar en qué posición del array coinciden los elementos
*/

// if (i1Nom1 === i2Nom1 || i1Nom1 === i2Nom2
//     || i1Nom2 === i2Nom1 || i1Nom2 === i2Nom2)  {
//     console.log('Los nombres de los integrantes coinciden')
// }

/* 6. Se utiliza un ciclo for para recorrer los arrays de cada integrante
    y se utiliza un condicional para verificar si los elementos de cada array coinciden
    y se imprime por consola el resultado

    Este ciclo es una mejora al código anterior punto 5, 
    ya que permite verificar en qué posición del array coinciden los elementos
    y obtener información adicional
*/

for (let i = 0; i < i1.length - 2; i++) {
    for (let j = 0; j < i2.length - 2; j++) {
        if (i1[i] === i2[j]) {

            const posCoincI1 = i1.findIndex((element) => element === i1[i]);
            const posCoincI2 = i2.findIndex((element) => element === i2[j]);

            console.log(`Los nombres de los integrantes coinciden
            El nombre "${i1[i]}" se repite en ambos integrantes`);

            let color = prompt(`Hubo coincidencia en los nombres de los integrantes, 
            ingrese un color para destacar los nombres`);

            let texto1 = (document.querySelector(`#i1Nom${posCoincI1 + 1}`).style.color = color);
            let texto2 = (document.querySelector(`#i2Nom${posCoincI2 + 1}`).style.color = color);
        } 
    }
}

let confirmacion = confirm(`¿Desea comparar los apellidos?`);

/* 7. Se verifica si los apellidos de los integrantes coinciden */
if (confirmacion) {
    for (let i = 2; i < i1.length; i++) {
        for (let j = 2; j < i2.length; j++) {
            if (i1[i] === i2[j]) {

                const posCoincI1 = i1.findIndex((element) => element === i1[i]);
                const posCoincI2 = i2.findIndex((element) => element === i2[j]);

                console.log(`Los apellidos de los integrantes coinciden
                El apellido "${i1[i]}" se repite en ambos integrantes`);

                console.log(posCoincI1)
                console.log(posCoincI2)

                let color = prompt(`Hubo coincidencia en los apellidos de los integrantes,
                ingrese un color para destacar los apellidos`);

                let texto1 = (document.querySelector(`#i1Ape${posCoincI1-1}`).style.color = color);
                let texto2 = (document.querySelector(`#i2Ape${posCoincI2-1}`).style.color = color);
            }
        }
    }
}
