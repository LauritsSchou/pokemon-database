"use strict";
const psyduck = {
  name: "Psyduck",
  description: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
  ability: "Damp, Cloud Nine",
  image: "https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/375px-0054Psyduck.png",
  footprint: "https://archives.bulbagarden.net/media/upload/b/ba/F0054.png",
  dexindex: 54,
  type: "Water",
  subtype: null,
  weaknesses: "Grass, Electric",
  gender: "Male or female",
  weight: 1960,
  height: 80,
  generation: 1,
  spilversion: "Yellow/Red/Blue",
  canEvolve: true,
  statsHP: 5,
  statsAttack: 5.2,
  statsDefence: 4.8,
  statsSpecialAttack: 6.5,
  statsSpecialDefence: 5,
  statsSpeed: 5.5,
};
function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
  <li>Image: <img src="${pokemon.image}"></li>
  <li>Footprint: <img src="${pokemon.footprint}"></li>
  <li>Name: ${pokemon.name}</li> 
  <li>Description: ${pokemon.description}</li>
  <li>Ability: ${pokemon.ability}</li>
  <li>Pokédex index: 00${pokemon.dexindex}</li>
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
  <li>Speed: ${pokemon.statsSpeed}</li> `;
  document.querySelector("#pokemonlist").insertAdjacentHTML("beforeend", pokemonHTML);
}
showPokemon(psyduck);
