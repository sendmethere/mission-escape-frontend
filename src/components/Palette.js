import styled from 'styled-components';
import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { pickTile, showStatus } from '../actions';

const PaletteContainer = styled.div`
width: ${32 * 16}px;
display: grid;
height: ${32 * 12}px;
grid-template-columns: repeat(16, 1fr);
overflow-y: scroll;
margin: 0 1rem 0 0;
`;

const PaletteIile = styled.div.attrs(props => ({
    style : {
        background : `url(assets/tiles/${props.i}.png`,
        }
    }))
    `
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    `;

const Palette = () => {
    const dispatch = useDispatch();
    const palette = useSelector(state => state.paletteReducer);
    
    /* GUI 구성 */

    const numberOfTiles = new Array(480).fill('');
    

    /* 이벤트 */

    return (
        <PaletteContainer>
            {
                numberOfTiles.map((tile, key) => 
                    <PaletteIile onClick={
                        () => dispatch(pickTile({type: 'PICK', tile: key}))
                        } 
                        className='ptile'
                        key={key} 
                        i={key}>
                        {tile}
                    </PaletteIile>
                )
            }
        </PaletteContainer>
    );
};

export default Palette;