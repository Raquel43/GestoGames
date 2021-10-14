const contenedor = document.getElementById("juegos");
const buttonAdd = document.getElementById("btn-guardar");

let juegosJSON = JSON.parse(localStorage.getItem("juegos")) || [];

document.addEventListener("DOMContentLoaded", () => {
  buttonAdd.addEventListener("click", addGame);
  getGames();
 
});

function getGames() {
  fetch("./data/jocs.json")
    .then((response) => response.json())
    .then((data) => {
      juegosJSON = JSON.parse(localStorage.getItem("juegos")) || data;

      populateGames(juegosJSON);
    });
}

function checkFormulario() {
  let nom = document.getElementById("nombre").value;
  let desenvolupador = document.getElementById("desarrollador").value;
  let lanzamiento = document.getElementById("lanzamiento").value;

  //comprobar si algun campo esta vacio
  if (nom == "" || desenvolupador == "" || lanzamiento == "") {
    alert("Faltan dades obligatories");
    return false;
  } else {
    return true;
  }
}

function evitarDuplicados(nombre) {
  for (let juego of juegosJSON) {
    if (juego.nombre == nombre) {
      alert("El nom està duplicat");
      return false;
    }
  }
  return true;
}

function addGame(e) {
  e.preventDefault();

  let nom = document.getElementById("nombre").value;
  let desenvolupador = document.getElementById("desarrollador").value;
  let genere = document.getElementById("genero").value;
  let pegi = document.getElementById("pegi").value;
  let lanzamiento = document.getElementById("lanzamiento").value;
  if (checkFormulario() && evitarDuplicados(nom)) {
    let juegosLlenar = {
      nom,
      desenvolupador,
      genere,
      pegi,
      lanzamiento,
    };

    juegosJSON.push(juegosLlenar);

    GuardarLocal();
    console.log(juegosJSON);
    populateGames(juegosJSON);
  }
}
function populateGames(games) {
  contenedor.innerHTML = "";
  console.log(games);
  games.forEach((game, index) => {
    contenedor.innerHTML += `
      <tr>
      <th>${index + 1}</th>
      <td>${game.nom}</td>
      <td>${game.desenvolupador}</td>
      <td>${game.lanzamiento}</td>
      </tr>
      
      `;
  });
}

function GuardarLocal() {
  // Comprovar en primer lloc si l'objecte Storage es troba definit al motor del navegador
  if (typeof Storage == "undefined") {
    alert("Localstore no soportado por el navegador");
  } else {
    console.log("Estoy guardando usuarios");

    // LocalStorage disponible
    // Guardar i extreure objectes json del Storage:

    let dadesNoves = juegosJSON;

    localStorage.setItem("juegos", JSON.stringify(dadesNoves));
    alert("objeto guardado");
  }
}



