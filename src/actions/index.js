export const pickTile = (tile) => {
    return {
        type: "PICK",
        payload: tile
    }
}

export const showStatus = () => {
    return {
        type: "SHOW"
    }
}

export const brushTile = (tile) => {
    return {
        type: "TILE",
        payload: tile
    }
}

export const brushEnd = () => {
    return {
        type: "BRUSH_END"
    }
}