import Components from '../Component.js';

class FilterType extends Components {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        const pokemon = this.props.pokemon;
        const types = getUniqueTypes(pokemon);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
            <select class="sorter" name="sort" id="sort">
                <option value="" disabled selected>Filter by Primary Type</option>
                <option value="all">All</option>
                ${optionsHTML}
            </select>   
        `;
    }
}

function getUniqueTypes(pokemon) {
    const types = [];
    pokemon.forEach(pokemon => {
        if(!types.includes(pokemon.type_1)) {
            types.push(pokemon.type_1);
        }
        if(!types.includes(pokemon.type_2)) {
            types.push(pokemon.type_2);
        }
    });
    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type => {
        return /*html*/`
        <option value="${type}" class="${type}">${type}</option>
        `;
    });
    return optionsArray.join('');
}

export default FilterType;