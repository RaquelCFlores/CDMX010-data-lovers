// Aquí van las Funciones : estas funciones son de ejemplo

//import lol from './data/lol/lol.js';
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Filtrado para categoría de Asesinos
export function filterData1(champions,){
  let resultAssassin = champions.filter(champion => {
    let assassin = (champion.tags[0] === "Assassin") + (champion.tags[1] === "Assassin");
    return assassin;
  })
  return resultAssassin;
}

//Filtrado para categoría de Luchadores
export function filterData2(champions,){
  let resultFighter = champions.filter(champion => {
    let fighter = (champion.tags[0] === "Fighter") + (champion.tags[1] === "Fighter");
    return fighter;
  })
  return resultFighter;
}

//Filtrado para categoría de Magos
export function filterData3(champions,){
  let resultMage = champions.filter(champion => {
    let mage = (champion.tags[0] === "Mage") + (champion.tags[1] === "Mage");
    return mage;
  })
  return resultMage;
}

//Filtrado para categoría de Tiradores
export function filterData4(champions,){
  let resultMarksman = champions.filter(champion => {
    let marksman = (champion.tags[0] === "Marksman") + (champion.tags[1] === "Marksman");
    return marksman;
  })
  return resultMarksman;
}

//Filtrado para categoría de Soportes
export function filterData5(champions,){
  let resultSupport = champions.filter(champion => {
    let support = (champion.tags[0] === "Support") + (champion.tags[1] === "Support");
    return support;
  })
  return resultSupport;
}

//Filtrado para categoría de Tanques
export function filterData6(champions,){
  let resultTank = champions.filter(champion => {
    let tank = (champion.tags[0] === "Tank") + (champion.tags[1] === "Tank");
    return tank;
  })
  return resultTank;
}

//-----------FUNCIÓN ORDENAR-----------//
// export function sortData(champions   /*, sortBy, sortOrder*/){
//   let orderZA = champions.sort((b, a) =>{
//   if(b.name < a.name){
//       return 1;
//   }
//   return -1;
//   });
//   return orderZA;
//   }
//   //------------------------------------//
  

// export const filter = (champions, id) => {
//   //     const tags = champions.forEach(champion => champion.tag.filter(tag => tag === id));
//   //     createCards(tags)
//   // }
  
// let result = champions.filter(champion => champion.tags.Assassin === tags.Assassin);
// //   let assassin = (champion.tags[0] === "Assassin") + (champion.tags[1] === "Assassin");
// //   return assassin;
// // })
// return result;
// }
