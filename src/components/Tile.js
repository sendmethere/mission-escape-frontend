import React from 'react';

function Tile(props) {
    return (
        <div className='tile' tile-x={props.x} tile-y={props.y} tile-i={props.i}
        style={{background: `url(assets/tiles/${props.i}.png)`}}
        >    
        </div>
    );
}

export default Tile;