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