const initialGame = {
    cells: {
        row1: { column1: "aaa", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row2: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row3: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row4: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row5: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row6: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" }
    }
}

const gameReducer = (game = initialGame, action) => {
    if (action.type === "SEND_MOVEMENT") {
        game = {...game }
        game.cells[action.row][action.column] = action.player;
    }
    return game
}

export default gameReducer;