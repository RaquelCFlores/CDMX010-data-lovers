//Eventos del DOM   
import { filterData1, filterData2, filterData3, filterData4, filterData5, filterData6 } from './data.js';
//import { sortData } from './data.js';
// import { filterData3 } from './data.js';
// import { filterData4 } from './data.js';
// import { filterData5 } from './data.js';
// import { filterData6 } from './data.js';
import data from './data/lol/lol.js';
//console.log(example, data);
//Aquí estamos conviertiendo nuestro objeto de objetos en un array//
const champions = Object.values(data.data);
const championsNum = champions.length;
document.getElementById('numChampions').innerHTML = championsNum;
const newCard = document.getElementById("cards-container");
///////////////////////////////////////////////////////////////////////
let filterAssassin = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR ASESINOS
document.querySelector('#assassin').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterAssassin1 = filterData1(champions, 'Assassin');
        filterAssassin1.forEach(elemento => {
            let resultAssassin = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;  
            filterAssassin.insertAdjacentHTML("beforeend", resultAssassin);
            });
            let numAssassin = filterAssassin1.length;
            document.getElementById('numChampions').innerHTML = numAssassin; 
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        }
    })


let filterFighter = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR LUCHADORES
document.querySelector('#fighter').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterFighter1 = filterData2(champions, 'Fighter');
        filterFighter1.forEach(elemento => {
            let resultFighter = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;
            filterFighter.insertAdjacentHTML("beforeend", resultFighter);
            });
            let numFighter = filterFighter1.length;
            document.getElementById('numChampions').innerHTML = numFighter;
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        } 
    })


let filterMage = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR MAGOS
document.querySelector('#mage').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterMage1 = filterData3(champions, 'Mage');
        filterMage1.forEach(elemento => {
            let resultMage = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;
            filterMage.insertAdjacentHTML("beforeend", resultMage);
            });
            let numMage = filterMage1.length;
            document.getElementById('numChampions').innerHTML = numMage; 
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        } 
    })


let filterMarksman = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR TIRADORES
document.querySelector('#marksman').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterMarksman1 = filterData4(champions, 'Marksman');
        filterMarksman1.forEach(elemento => {
            let resultMarksman = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;
            filterMarksman.insertAdjacentHTML("beforeend", resultMarksman);
            });
            let numMarksman = filterMarksman1.length;
            document.getElementById('numChampions').innerHTML = numMarksman; 
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        } 
    })


let filterSupport = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR SOPORTES
document.querySelector('#support').addEventListener('change', (event) =>{
    if(event.target.checked){ 
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterSupport1 = filterData5(champions, 'Support');
        filterSupport1.forEach(elemento => {
            let resultSupport = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;
            filterSupport.insertAdjacentHTML("beforeend", resultSupport);
            });
            let numSupport = filterSupport1.length;
            document.getElementById('numChampions').innerHTML = numSupport;
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        }  
    })  


let filterTank = document.getElementById('filter-cards-container');
//FUNCIÓN PARA FILTRAR TANQUES
document.querySelector('#tank').addEventListener('change', (event) =>{
    if(event.target.checked){
        document.getElementById('cards-container').style.display = "none";
        document.getElementById('filter-cards-container').style.display = "flex";
        let filterTank1 = filterData6(champions, 'Tank');
        filterTank1.forEach(elemento => {
            let resultTank = `
                <div id="one-container" class="one-container">
                    <img src="${elemento.splash}" class="img-container">
                    <h4 id="description">${elemento.name}</h4>
                </div>
                `;
            filterTank.insertAdjacentHTML("beforeend", resultTank);
            });
            let numTank = filterTank1.length;
            document.getElementById('numChampions').innerHTML = numTank; 
        }
        else {
            document.getElementById('cards-container').style.display = "flex";
            document.getElementById('filter-cards-container').style.display = "none";
            const championsNum = champions.length;
            document.getElementById('numChampions').innerHTML = championsNum;
        }  
    })


// function showFilterAZ(e) {
//     document.querySelector("#az").textContent = e.detail;
//     return sortData
// }
/////////////////////////////////////////////////////////////////////////////

// let allAssassin = loll(champions, 'Assassin');{
//     allAssassin = `
//         <div id="one-container" class="one-container">
//             <img src="${assassin.splash}" class="img-container">
//             <h4 id="description">${assassin.name}</h4>
//         </div>
//         `;
//     newCard.insertAdjacentHTML("beforeend", allAssassin);
// };

//Codigo Carlos
// document.addEventListener('DOMContentLoaded',()=>{
//     console.log("algo")
//     assassin.addEventListener('change',(e)=>{
//         // let filterAssassin = loll(champions, 'Assassin');
//         // return filterAssassin;
//         console.log("ya sirvo assassin", e.target.value)
//     })
//     //console.log(loll(champions, 'Assassin'));
// })

//const createCards = () => { 
    champions.forEach(champion => {
    let card = `
        <div id="one-container" class="one-container">
            <img src="${champion.splash}" class="img-container">
            <h4 id="description">${champion.name}</h4>
        </div>
        `;
    newCard.insertAdjacentHTML("beforeend", card);
    });
// }

//Barra buscadora de campeones
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
            newCard.innerHTML = ` <p class="pNoFound">Campeón no encontrado</p> `;
        }
        
}

buscar.addEventListener("keyup", filtro);
// //----------------------------------------//

document.querySelector('#goUp').style.display = 'none';
let showButtonGoUp = document.querySelector('#buttonStart');
showButtonGoUp.addEventListener('click', function(){
    document.querySelector('#goUp').style.display = 'block';
    document.querySelector('#homePage').style.display = 'none';
})
/////////////// FUNCIÓN QUE NOS AYUDÓ A CREAR CARLOS
//let assassin = document.getElementById('assassin');
//FUNCIÓN PARA FILTRAR ASESINOS
// document.addEventListener('DOMContentLoaded',()=>{   
//     assassin.addEventListener('change',(e)=>{
//         document.getElementById('cards-container').style.display = "none";
//         document.getElementById('filter-cards-container').style.display = "flex";
//         let filterAssassin1 = loll(champions, 'Assassin');
//         filterAssassin1.forEach(elemento => {
//             let resultAssassin = `
//                 <div id="one-container" class="one-container">
//                     <img src="${elemento.splash}" class="img-container">
//                     <h4 id="description">${elemento.name}</h4>
//                 </div>
//                 `;  
//             filterAssassin.insertAdjacentHTML("beforeend", resultAssassin);
//             });
//             let numAssassin = filterAssassin1.length;
//             document.getElementById('numChampions').innerHTML = numAssassin; 
//     })
// })