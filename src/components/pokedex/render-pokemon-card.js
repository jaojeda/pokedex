
export default function renderPokemonCard(pokemon) {
    const html = /*html*/`
        <li class="pokemon-container">
            <div class="name-container">
                <h2 class="name">${pokemon.pokemon}</h2>
                <p class="number">No. ${pokemon.id}</p>
            </div>
            <div class="image-container">
                <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            </div>
            <div class="type-container">
                <p class="type ${pokemon.type_1}">${pokemon.type_1}</p>
                <p class="type ${pokemon.type_2}">${pokemon.type_2}</p>
            </div>
        </li>
    `;
    return html;
}   