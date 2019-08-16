import Component from './Component.js';
import Header from './Header.js';

class App extends Component {

    onRenderDom(dom) {
        const header = new Header();
        const headerDOM = header.rederDOM();
        dom.prepend(headerDOM);

        const props = {
            pokemon: pokemon    
        };

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.rederDOM();

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