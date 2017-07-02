import _ from 'lodash'

const initialGame = {
    cells: {
        row1: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row2: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row3: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row4: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row5: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" },
        row6: { column1: "", column2: "", column3: "", column4: "", column5: "", column6: "", column7: "" }
    }
}

const gameReducer = (game = initialGame, action) => {
    if (action.type === "SEND_MOVEMENT") {
        game = {...game };
        insertInFirstRow(action.column, game, action.player);
    }
    if (action.type === "SERVER_START_GAME"){
       game = {...game };
       game.cells[action.serverMovement.row][action.serverMovement.column] = action.player;
    }
    return game
}


const insertInFirstRow = (column, game, player) => {
    const rows = ["row6", "row5", "row4", "row3", "row2", "row1"];
    const bottomRow = _.first(_.filter(rows, (x) => game.cells[x][column] == ""));
    if(bottomRow != undefined) game.cells[bottomRow][column] = player;
}

export default gameReducer;