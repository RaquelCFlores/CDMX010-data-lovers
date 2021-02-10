//Eventos del DOM  auqi va la manipulacion de todo TODO el dom 
import { filterData, sortData, sortDataAZ, orderRandom } from './data.js';
import data from './data/lol/lol.js';

//Conviertiendo nuestro objeto de objetos en un array
const champions = Object.values(data.data);

//Arroja el número de campeones que hay en el array completo
const championsNum = champions.length;
document.getElementById("numChampions").innerHTML = championsNum;

//Apunta al nodo donde se imprimiran las tarjetas
let newCard = document.getElementById("cards-container");

//--FUNCIÓN RECORRER LA DATA Y CREAR TARJETAS--//

function createHtml(oneChampion){
    let {splash, name} = oneChampion;
    if(splash && name){
      return `
        <div id="one-container">
            <img src="${splash}"class="img-container">
            <h4 id="description">${name}</h4>
        </div>
    `
    }
  }

function createCards(champions){
    let cards = "";
    champions.forEach(elchampion => {
      cards += createHtml(elchampion)
    });
    newCard.innerHTML = cards;
  }
  
  createCards (champions);

 //---------------------------------------------//

//-----MANIPULACIÓN DOM FUNCIÓN PARA FILTRAR ASESINOS-------//

document.querySelector('#assassin').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        let filterAssassin1 = filterData(champions, 'Assassin');
        createCards(filterAssassin1);
        let numAssassin = filterAssassin1.length;
        document.getElementById('numChampions').innerHTML = numAssassin; 
        }
        else {
            createCards(champions);
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        }
    })

//--------------------------------------------------------------//

//----------MANIPULACIÓN DOM FUNCIÓN FILTRAR LUCHADORES---------//
 
 document.querySelector('#fighter').addEventListener('change', (event) =>{
     if(event.target.checked){ 
         let filterFighter1 = filterData(champions, 'Fighter');
         createCards(filterFighter1);
         let numFighter = filterFighter1.length;
         document.getElementById('numChampions').innerHTML = numFighter;
         }
         else {
            createCards (champions);
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
         } 
     })

//--------------------------------------------------------------//

//--------------------BUSCAR-------------------//
const buscar = document.querySelector("#buscar");

function filtro () {
    newCard.innerHTML = "";
    const texto = buscar.value.toLowerCase();
    
    for(let champion of champions){
        let nombre = champion.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            newCard.innerHTML += `
                    <div id="one-container">
                        <img src="${champion.splash}" class="img-container">
                        <h4 id="description">${champion.name}</h4>
                    </div>
                `;
        }
    }
        if(newCard.innerHTML === ""){
            newCard.innerHTML = ` <p>Campeón no encontrado</p> `;
        }
        
}
 
buscar.addEventListener("keyup", filtro);

filtro();
//-----------------------------------------------//

//---------------MANIPULACIÓN DOM SELECT-----------------//
document.querySelector("#select").addEventListener('change', (event) =>{
    if (event.target.value === "Z-A"){
        let filterZA = sortData(champions);
        createCards(filterZA);
        } else if (event.target.value === "A-Z"){
            let filterAZ = sortDataAZ(champions);
            createCards (filterAZ);
        }else if (event.target.value === "Random"){
            let filterRandom = orderRandom(champions);
            createCards(filterRandom);
        }   
    })
//------------------------------------------------------//


document.querySelector('#goUp').style.display = 'none';
let showButtonGoUp = document.querySelector('#buttonStart');
showButtonGoUp.addEventListener('click', function(){
    document.querySelector('#goUp').style.display = 'block';
    document.querySelector('#homePage').style.display = 'none';
});