"use strict";
window.addEventListener("load", initApp);
async function initApp() {
  const pokemon = await getPokemon();
  showPokemon(pokemon);
}

async function getPokemon(url) {
  const response = await fetch(
    "https://raw.githubusercontent.com/LauritsSchou/pokemon-database/main/psyduck.json"
  );
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ ` <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>${pokemon.type}</p>
            </article>`;
  document
    .querySelector("#pokemon")
    .insertAdjacentHTML("beforeend", pokemonHTML);

  document
    .querySelector("#pokemon article:last-child")
    .addEventListener("click", pokemonClicked);
  function pokemonClicked() {
    document.querySelector("#pokemondetails").showModal();
    const dialogHTML = /*html*/ `
    <h1>${pokemon.name}</h1>
<img src="${pokemon.image}" class="center"></li>
<h3><i>"${pokemon.description}"</i></h3>
  <li>Footprint: <img src="${pokemon.footprint}"></li>
  <li>Ability: ${pokemon.ability}</li>
  <li>Pokédex index: #00${pokemon.dexindex}</li>
  <li>Type: ${pokemon.type}</li>
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weaknesses: ${pokemon.weaknesses}</li>
  <li>Gender: ${pokemon.gender}</li>
  <li>Weight: ${pokemon.weight} grams</li>
  <li>Height: ${pokemon.height} centimeters</li>
  <li>Generation: ${pokemon.generation}</li>
  <li>Game version: ${pokemon.spilversion}</li>
  <li>Can it evolve: ${pokemon.canEvolve}</li>
  <li>HP: ${pokemon.statsHP}</li>
  <li>Attack: ${pokemon.statsAttack}</li>
  <li>Special attack: ${pokemon.statsSpecialAttack}</li>
  <li>Special defence: ${pokemon.statsSpecialDefence}</li>
  <li>Speed: ${pokemon.statsSpeed}</li> 
  <form method="dialog">
		<button>Close</button>
</form>`;
    document
      .querySelector("#pokemondetails")
      .insertAdjacentHTML("beforeend", dialogHTML);
  }
}
