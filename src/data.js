// Aquí van las Funciones : manipulacion de la data.

//------------FUNCIÓN PARA FILTRAR----------//

export function filterData(champions, condition){
  let result = champions.filter(champion => {
    let luchador = (champion.tags[0] === condition) + (champion.tags[1] === condition);
    return luchador;
  }
)
return result;
}

//------------------------------------------//

//------------FUNCIÓN ORDENAR Z-A-----------//
export function sortData(champions){
let orderZA = champions.sort((b, a) =>{
  if(b.name < a.name){
    return 1;
  }
  return -1;
});
return orderZA;
}
//------------------------------------//

//-----------FUNCIÓN ORDENAR A-Z-------//
export function sortDataAZ(champions){
  let orderAZ = champions.sort((a, b) =>{
    if(a.name > b.name){
      return 1;
    }
    return -1;
  })
  return orderAZ;
}
//------------------------------------//

//------------FUNCIÓN RANDOM---------------//

export function orderRandom(champions){
  let ordRandom = champions.sort( () => {
    return Math.random () -0.5
  });
return ordRandom;
}
//----------------------------------------//