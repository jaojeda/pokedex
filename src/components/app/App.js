import Component from '../Component.js';
import Header from './Header.js';
import PokemonList from '../pokedex/PokemonList.js';
// import pokemon from '../data/pokemon.js';
import FilterType from '../options/FilterType.js';
import Paging from '../options/Paging.js';
import { getPokeData } from '../services/pokemon-api.js';
import hashStorage from '../services/hash-storage.js';
import Search from '../options/Search.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const optionsSection = dom.querySelector('.options-container');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const props = {
            pokemon: []    
        };


        const paging = new Paging();
        const pokedexSection = dom.querySelector('.pokedex-section');
        pokedexSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();
        pokedexSection.appendChild(pokemonListDOM);
        
        function loadPokemon() {

            const options = hashStorage.get();
            getPokeData(options)
                .then(data => {
                    const pokemon = data.results;
                    const totalCount = data.count;

                    pokemonList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page


                    });
                    
                    const filterPokemonCards = {
                        pokemon: pokemon,
                        onFilter: (pokemonType) => {
                            let filteredPokemon;
                            if(pokemonType === 'all') {
                                filteredPokemon = pokemon;
                            }
                            else if(pokemonType === pokemon.type_2) {
                                filteredPokemon = pokemon.filter(pokemon => {
                                    return pokemon.type_2 === pokemonType;
                                });
                            }
                            else {
                                filteredPokemon = pokemon.filter(pokemon => {
                                    return pokemon.type_1 === pokemonType;
                                });
                            }
            
                            const updateProps = { pokemon: filteredPokemon };
                            pokemonList.update(updateProps);
                        }
                    };
                    const filterPokemon = new FilterType(filterPokemonCards);
                    const filterPokemonDOM = filterPokemon.renderDOM();
                
                    // if(optionsSection.firstChild) {
                    //     optionsSection.removeChild(optionsSection.firstChild);
                    // }
                    optionsSection.appendChild(filterPokemonDOM);
                    
                });                 
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });       
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