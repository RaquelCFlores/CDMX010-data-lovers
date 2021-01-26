//EVENTOS DEL DOM
import { example } from './data.js';
import data from './data/lol/lol.js';

const champions = Object.values(data.data);

const newCard = document.getElementById("cards-container");
champions.forEach(champion => {
    let card = `
        <div id="one-container"><br>
            <img src="${champion.splash}" class="img-container">
            <h4 id="description">${champion.name}</p>
        </div>
    `;
    newCard.insertAdjacentHTML("beforeend", card);
});

console.log(example, data);