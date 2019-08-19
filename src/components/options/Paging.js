import Component from '../Component.js';
import hasStorage from '../services/hash-storage.js';

class Paging extends Component {
    
    onRender(dom) {
        const backButton = dom.querySelector('.back');
        const nextButton = dom.querySelector('.next');

        if(!backButton) {
            return;
        }

        const currentPage = this.props.currentPage || 1;

        function updatePage(increment) {
            hasStorage.set({ page: currentPage + increment });
        }

        backButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const currentPage = this.props.currentPage || 1;
        const perPage = 20;
        const totalCount = this.props.totalCount;

        if(!totalCount) {
            return /*html*/`
                <p class="paging">No results, try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
            <p class="paging">
                <button class="back" ${currentPage === 1 ? 'disabled' : ''}>◀</button>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>▶</button>
            </p>
        `;
    }
}

export default Paging;