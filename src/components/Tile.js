import React from 'react';
import { pickTile, brushTile, brushEnd } from '../actions';
import { useSelector, useDispatch } from "react-redux";

function Tile(props) {
    const dispatch = useDispatch();
    const mapdata = useSelector(state => state.mapdataReducer);
    const palette = useSelector(state => state.paletteReducer);

    return (
        <div className='tile' tile-x={props.x} tile-y={props.y} tile-i={props.i}
        style={{background: `url(assets/tiles/${props.i}.png)`}}
        onMouseDown={
            (e) => {
                switch(e.button){
                    case 2:
                        dispatch(pickTile({type: 'PICK', tile: props.i}));
                        return false
                    default:
                        dispatch(brushTile({type:"TILE", no: props.no, x: props.x, y: props.y, tile: palette.currentBrush}))
                }

            }
        }
        onMouseOver={
            () => {if (mapdata.isBrushing) { 
                dispatch(brushTile({type:"TILE", no: props.no, x: props.x, y: props.y, tile: palette.currentBrush}))
                }
            }
        }
        onMouseUp={
            () => {dispatch(brushEnd({type:"BRUSH_END"}))}
        }
        >    
        </div>
    );
}

export default Tile;