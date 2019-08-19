import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <input class="options-button" type="image" src="./src/components/assets/pokedex-lense.png">
            </header>
        `;
    }
}

export default Header;