import Component from '../Component.js';
import Header from './Header.js';
import PokemonList from '../pokedex/PokemonList.js';
import pokemon from '../data/pokemon.js';
import FilterType from '../options/FilterType.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            pokemon: pokemon    
        };

        const pokemonList = new PokemonList(props);

        const pokemonListDOM = pokemonList.renderDOM();

        const pokedexSection = dom.querySelector('.pokedex-section');
        pokedexSection.appendChild(pokemonListDOM);
        
        const filterPokemonCards = {
            pokemon: pokemon,
            onFilter: (pokemonType) => {
                let filteredPokemon;
                if(pokemonType === 'all') {
                    filteredPokemon = pokemon;
                }
                else if(pokemonType === pokemon.type_1) {
                    filteredPokemon = pokemon.filter(pokemon => {
                        return pokemon.type_1 === pokemonType;
                    });
                }
                else {
                    filteredPokemon = pokemon.filter(pokemon => {
                        return pokemon.type_2 === pokemonType;
                    });
                }

                const updateProps = { pokemon: filteredPokemon };
                pokemonList.update(updateProps);
            }
        };
        const filterPokemon = new FilterType(filterPokemonCards);
        const filterPokemonDOM = filterPokemon.renderDOM();

        const optionsSection = dom.querySelector('.options-container');
        optionsSection.appendChild(filterPokemonDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options-container"></section>
                    <section class="pokedex-section"></section>
                </main>
                <footer></footer>
            </div>
        `;
    }
}

export default App;