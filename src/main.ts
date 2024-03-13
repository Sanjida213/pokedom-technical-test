import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const individualCards = document.querySelector<HTMLElement>(".card-container")
const cardsContainer = document.querySelector<HTMLElement>(".pokemon-container")
const filterInput = document.querySelector<HTMLInputElement>("#filter-cards")

if (!individualCards || !cardsContainer || !filterInput) {
  throw new Error ("issues with card")
}

let pokemonArrays = [...pokemonArray];


const cards = () => {
  cardsContainer.style.display = "flex"
  cardsContainer.style.flexWrap = "wrap"

  pokemonArrays.forEach((pokemon) => {
    const individualCards = document.createElement('div');
    individualCards.classList.add('pokemon-card');

    individualCards.innerHTML += 
    `<div class="pokemon-card#">
    <img src="${pokemon.sprite}" alt="${pokemon.name}">
      <p class="pokemon-name">${pokemon.name}</p>
      <p class="pokemon-info">${pokemon.name} (#${pokemon.id}) is a </p> 
      <p class="pokemon-info">${pokemon.types.join(' and ')} pokemon. </p> 
    </div>`;

    cardsContainer.appendChild(individualCards);

    individualCards.style.backgroundColor = "pink";
    individualCards.style.marginBottom = "20px";
    individualCards.style.marginRight = "10px";
    individualCards.style.padding = "10px"
  })
}

cards();



const filterButton = (event: Event) => {
  const userInput = (event.currentTarget as HTMLInputElement).value.toLowerCase();

    const filteredPokemons = pokemonArray.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(userInput);
    });
  
    cards(filteredPokemons);
}

filterInput.addEventListener("input", filterButton)
