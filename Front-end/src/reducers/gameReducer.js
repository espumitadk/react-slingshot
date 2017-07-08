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
    if (action.type === "PLAYER_MOVEMENT") {
        const gameStateCloned = Object.assign({}, game);
        gameStateCloned.cells = {...game.cells};
        gameStateCloned.cells["row1"] = {...game.cells["row1"]};
        gameStateCloned.cells["row2"] = {...game.cells["row2"]};
        gameStateCloned.cells["row3"] = {...game.cells["row3"]};
        gameStateCloned.cells["row4"] = {...game.cells["row4"]};
        gameStateCloned.cells["row5"] = {...game.cells["row5"]};
        gameStateCloned.cells["row6"] = {...game.cells["row6"]};  
        insertInFirstRow(action.column, gameStateCloned, action.player);
        return gameStateCloned;
    }
    if (action.type === "SERVER_START_GAME"){
       const gameStateCloned = Object.assign({}, game); 
       gameStateCloned.cells = {...game.cells};
       gameStateCloned.cells["row1"] = {...game.cells["row1"]};
       gameStateCloned.cells["row2"] = {...game.cells["row2"]};
       gameStateCloned.cells["row3"] = {...game.cells["row3"]};
       gameStateCloned.cells["row4"] = {...game.cells["row4"]};
       gameStateCloned.cells["row5"] = {...game.cells["row5"]};
       gameStateCloned.cells["row6"] = {...game.cells["row6"]};        
       gameStateCloned.cells[action.serverMovement.row][action.serverMovement.column] = action.player;
       return gameStateCloned;
    }
    if (action.type === "SERVER_MOVEMENT"){
       const gameStateCloned = Object.assign({}, game);
        gameStateCloned.cells = {...game.cells};
        gameStateCloned.cells["row1"] = {...game.cells["row1"]};
        gameStateCloned.cells["row2"] = {...game.cells["row2"]};
        gameStateCloned.cells["row3"] = {...game.cells["row3"]};
        gameStateCloned.cells["row4"] = {...game.cells["row4"]};
        gameStateCloned.cells["row5"] = {...game.cells["row5"]};
        gameStateCloned.cells["row6"] = {...game.cells["row6"]};  
       gameStateCloned.cells[action.serverMovement.row][action.serverMovement.column] = action.player;
       return gameStateCloned;
    }
    return game
}


const insertInFirstRow = (column, game, player) => {
    const rows = ["row6", "row5", "row4", "row3", "row2", "row1"];
    const bottomRow = _.first(_.filter(rows, (x) => game.cells[x][column] == ""));
    if(bottomRow != undefined) game.cells[bottomRow][column] = player;
}

export default gameReducer;