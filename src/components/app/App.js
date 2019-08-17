import Component from '../Component.js';
import Header from './Header.js';
import PokemonList from '../pokedex/PokemonList.js';
import pokemon from '../data/pokemon.js';


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