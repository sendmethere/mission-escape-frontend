
var mapWidth = 12;
var mapHeight = 12;
var tilesInit = [];

for(var m=0;m<mapWidth;m++){
    for(var n=0;n<mapHeight;n++){
      tilesInit.push({
        x: n,
        y: m,
        image: 0,
      });
    } 
  }

const INITIAL_STATE = {
    mapWidth: mapWidth,
    mapHeight: mapHeight,
    tiles : tilesInit,
    block : [],
    objects : [],
    events : [],
    isBrushing: false,
}

const mapdataReducer =  (state = INITIAL_STATE, action) =>  {
    switch(action.type){
      case "TILE":
          var temp = [...state.tiles]
          temp[action.payload.no].image = action.payload.tile
          return {...state, tiles:temp, isBrushing:true}
      case "BRUSH_END":
              return {
                  ...state,
                  isBrushing: false
              }
    default:
        return state
    }
}

export default mapdataReducer;