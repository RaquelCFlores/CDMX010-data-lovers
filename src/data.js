// Aquí van las Funciones 
//------------FUNCIÓN PARA FILTRAR----------//
export function filterData(champions, condition){
  let result = champions.filter(champion => {
    let champions = (champion.tags[0] === condition) + (champion.tags[1] === condition);
    return champions;
  }
)
return result;
}
//-------------------------------------------------//
//-----------FUNCIÓN ORDENAR DE LA Z-A-----------//
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
//-----------FUNCIÓN ORDENAR DE LA A-Z-----------//
export function sortDataAZ(champions){
  let orderAZ = champions.sort((a, b) =>{
  if(a.name > b.name){
      return 1;
  }
  return -1;
  })
  return orderAZ;
  }

//------------FUNCIÓN RANDOM---------------//

export function orderRandom(champions){
  let ordRandom = champions.sort( () => {
    return Math.random () -0.5
  });
return ordRandom;
}
//----------------------------------------//
