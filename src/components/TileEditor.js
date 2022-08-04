import Tile from './Tile';
import styled from 'styled-components';

import { useSelector, useDispatch } from "react-redux";

function TileEditor(props) {

    const dispatch = useDispatch();
    const mapdata = useSelector(state => state.mapdata);

    console.log(mapdata)

    const TileContainer = styled.div`
        width: ${mapdata.mapWidth * 32}px;
        height: ${mapdata.mapHeight * 32}px;
        display: grid;
        grid-template-columns: repeat(${mapdata.mapWidth}, 1fr);
    `;  

    return (
        <TileContainer>
            {
                mapdata.tiles.map((tile,key)=> 
                    <Tile key={key} x={tile.x} y={tile.y} i={tile.image} />
                )}
        </TileContainer>
    );
}

export default TileEditor;