import renderPokemonCard from '../src/components/pokedex/render-pokemon-card.js';

const test = QUnit.test;

QUnit.module('Render Pokemon Card');

test('render pokemon info from data', (assert) => {
    const pokemon = {  
        '_id': '5cef3501ef6005a77cd4fd1a',
        'pokemon': 'charmander',
        'id': 5,
        'species_id': 4,
        'height': 6,
        'weight': 85,
        'base_experience': 62,
        'type_1': 'fire',
        'type_2': 'NA',
        'attack': 52,
        'defense': 43,
        'hp': 39,
        'special_attack': 60,
        'special_defense': 50,
        'speed': 65,
        'ability_1': 'blaze',
        'ability_2': 'NA',
        'ability_hidden': 'solar-power',
        'color_1': '#F08030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'monster',
        'egg_group_2': 'dragon',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 2,
        'shape_id': 6,
        'shape': 'upright',
        'pokebase': 'charmander',
        'pokedex': 'http://www.pokemon.com/us/pokedex/charmander'        
    };

    const expected = /*html*/`
        <li class="pokemon-container">
            <div class="name-container">
                <h2 class="name">charmander</h2>
                <p class="number">No. 5</p>
            </div>
            <div class="image-container">
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="charmander">
            </div>
            <div class="type-container">
                <p class="type fire">fire</p>
                <p class="type NA">NA</p>
            </div>
        </li>
    `;

    const html = renderPokemonCard(pokemon);

    assert.htmlEqual(html, expected);
});