// page 3
// top row
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    }) 
}
// bottom row
const panels2 = document.querySelectorAll('.panel2')
panels2.forEach(panel2 => {
    panel2.addEventListener('click' , () => {
        removeActiveClassesSecond()
        panel2.classList.add('active')
    })

})
function removeActiveClassesSecond() {
    panels2.forEach(panel2 => {
        panel2.classList.remove('active')
    }) 
}
// end page 3




// pokedex
// tutorial here:
// https://levelup.gitconnected.com/create-a-pokedex-with-vanilla-js-7aa580d6c96b
const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

fetchPokemons();



function func() {
	var type = str.toUpperCase();
}