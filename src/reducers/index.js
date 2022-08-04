import { combineReducers } from "redux";
import mapdata from "./mapdata";
import paletteReducer from "./palette"

    const rootReducer = combineReducers({
        mapdata,
        paletteReducer
    });

export default rootReducer;