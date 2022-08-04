
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
}

export default function mapdata(state = INITIAL_STATE, action) {
    return state
}