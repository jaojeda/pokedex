import Component from './Component.js';

class PokemonList extends Component {

    onRender(dom) {
        const pokemonInfo = this.props.pokemonInfo;

        pokemonInfo.forEach(pokemon => {
            const props = {pokemon: pokemon};
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