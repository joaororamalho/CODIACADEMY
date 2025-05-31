const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonCard = document.getElementById('pokemonCard');
const pokemonName = document.getElementById('pokemonName');
const pokemonNumber = document.getElementById('pokemonNumber');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonTypes = document.getElementById('pokemonTypes');

let mappedPokemonList = []; // Lista mapeada global

async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const pokemonList = data.results;

        // Primeiro mapeamento: transforma os dados brutos em um array estruturado
        mappedPokemonList = pokemonList.map((pokemon, index) => {
            return {
                number: index + 1, // Número do Pokémon (1 a 151)
                name: capitalizeFirstLetter(pokemon.name), // Nome com a primeira letra maiúscula
                value: pokemon.name // Valor usado no atributo value do option
            };
        });

        clearSelectOptions(pokemonSelect);
        populateSelectOptions(pokemonSelect, mappedPokemonList);

        // Seleciona o primeiro Pokémon automaticamente
        if (mappedPokemonList.length > 0) {
            pokemonSelect.value = mappedPokemonList[0].value;
            updatePokemonCard(mappedPokemonList[0].value);
        }

    } catch (error) {
        console.error('Erro ao buscar os Pokémon: ', error);
        clearSelectOptions(pokemonSelect);
        pokemonSelect.innerHTML = '<option value="">Falha ao carregar os Pokémon</option>';
    }
}

// Função para adicionar as opções no select com base na lista mapeada
function populateSelectOptions(selectElement, pokemonList) {
    pokemonList.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.value;
        option.textContent = `#${pokemon.number} - ${pokemon.name}`;
        selectElement.appendChild(option);
    });
}

// Função para limpar todas as opções do select
function clearSelectOptions(selectElement) {
    selectElement.innerHTML = '';
}

// Função utilitária para capitalizar a primeira letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para atualizar o card do Pokémon
async function updatePokemonCard(pokemonNameValue) {
  if (!pokemonNameValue) {
    pokemonCard.classList.add('hidden');
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameValue}`);
    const data = await response.json();

    const types = data.types.map(t => capitalizeFirstLetter(t.type.name)).join(' / ');

    pokemonName.textContent = capitalizeFirstLetter(data.name);
    pokemonNumber.textContent = `Número: #${data.id}`;
    pokemonTypes.textContent = `Tipo: ${types}`;
    pokemonImage.src = data.sprites.front_default || '';
    pokemonImage.alt = data.name;

    pokemonCard.classList.remove('hidden');

  } catch (error) {
    console.error('Erro ao buscar os dados do Pokémon: ', error);
  }
}

// Evento de mudança no select
pokemonSelect.addEventListener('change', function() {
  updatePokemonCard(this.value);
});

fetchPokemon();