//Eventos del DOM   
//import { example } from './data.js';
import data from './data/lol/lol.js';
//console.log(example, data);
//Aquí estamos conviertiendo nuestro objeto de objetos en un array
const champions = Object.values(data.data);
const newCard = document.getElementById("cards-container");
champions.forEach(champion => {
    let card = `
        <div id="one-container">
            <img src="${champion.splash}" class="img-container">
            <h4 id="description">${champion.name}</h4>
        </div>
    `;
    newCard.insertAdjacentHTML("beforeend", card);
});

// champions.forEach(champion => {
//     let card = `
//         <div id="one-container" style="justify-content: space-evenly; float:left; margin: 0 1rem; width: 20%; height:100%; overflow: hidden;"><br>
//             <img src="${champion.splash}" class="img-container" style="width: 100%; height: 100%; text-aling: center; margin-right: 0%;">
//             <h4 id="description" style="background-color: #0F474A; font-family: 'Pirata One', cursive; font-size: 2em; text-aling: center; margin: 0 0; width: 100%;">${champion.name}</h4>
//         </div>
//     `;
//     newCard.insertAdjacentHTML("beforeend", card);
// });

// document.querySelector('.goUp').addEventListener('click', () =>{
//     window.scrollTo({
//         top: 0,
//         behavior:'smooth'
//     });
// });

// document.getElementById('buttonStart').addEventListener('click', showButtonGoUp())
// function showButtonGoUp(){
//     document.querySelector('#goUp').style.display = 'block';
// }

document.querySelector('#goUp').style.display = 'none';
let showButtonGoUp = document.querySelector('#buttonStart');
showButtonGoUp.addEventListener('click', function(){
    document.querySelector('#goUp').style.display = 'block';
    document.querySelector('#homePage').style.display = 'none';
})

