import Component from '../Component.js';
import hashStorage from '../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');

            hashStorage.set({ 
                search: search,
                page: 1
            });
        });

        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().search || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';

        return /*html*/`
            <form>
                <input placeholder="Search by Name" class="search-bar" name="search" value="${search}">
            </form>
        `;
    }
}

export default Search;