import Tile from './Tile';
import styled from 'styled-components';

import { useSelector, useDispatch } from "react-redux";
import { brushTile } from '../actions';

const TileContainer = styled.div`
width: ${props => props.mapWidth}px;
height: ${props => props.mapHeight}px;
display: grid;
grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

function TileEditor(props) {

    const dispatch = useDispatch();
    const mapdata = useSelector(state => state.mapdataReducer);

    return (
        <TileContainer 
            mapWidth={mapdata.mapWidth * 32} 
            mapHeight={mapdata.mapHeight * 32} 
            columns={mapdata.mapWidth}>
            {
                mapdata.tiles.map((tile,key)=> 
                    <Tile 
                        key={key} no={key} x={tile.x} y={tile.y} i={tile.image} 
                    />
                )}
        </TileContainer>
    );
}

export default TileEditor;