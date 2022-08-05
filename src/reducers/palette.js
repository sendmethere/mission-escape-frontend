const INITIAL_STATE = {
    prevBrush: 0,
    currentBrush: 0,
    currentMode: 'TILE',
}

const paletteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "PICK":
            
            var prev = document.getElementsByClassName("ptile")[state.currentBrush];
            var selected = document.getElementsByClassName("ptile")[action.payload.tile];
            prev.classList.remove("selected");
            selected.classList.add("selected");

            return {
            ...state,
            prevBrush: state.currentBrush,
            currentBrush: action.payload.tile,
        }
        case "SHOW":
            {
             console.log(state);
             return state
        }
    default:
        return state
    }
}

export default paletteReducer;