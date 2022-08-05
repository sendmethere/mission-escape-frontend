import { combineReducers } from "redux";
import mapdataReducer from "./mapdata";
import paletteReducer from "./palette"

    const rootReducer = combineReducers({
        mapdataReducer,
        paletteReducer
    });

export default rootReducer;