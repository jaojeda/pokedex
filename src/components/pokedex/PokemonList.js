import Component from '../Component.js';
import PokemonCard from './PokemonCard.js';

class PokemonList extends Component {

    onRender(dom) {
        const pokemon = this.props.pokemon;
        pokemon.forEach(pokemon => {
            
            const props = { pokemon: pokemon };
            const pokemonCard = new PokemonCard(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            dom.appendChild(pokemonCardDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
            <ul class="pokemon-display">
        `;
    }
}

export default PokemonList;