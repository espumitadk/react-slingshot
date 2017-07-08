import _ from 'lodash'

const initialGame = {
    cells: []
}

const gameReducer = (game = initialGame, action) => {
    if (action.type === "PLAYER_MOVEMENT") {
        const gameStateCloned = Object.assign({}, game);
        gameStateCloned.cells = [...game.cells];
        insertInFirstRow(action.column, gameStateCloned, action.player);
        return gameStateCloned;
    }
    if (action.type === "SERVER_START_GAME"){
        const gameStateCloned = Object.assign({}, game); 
        gameStateCloned.cells = [...game.cells];
        insertInFirstRow(action.serverMovement.column, gameStateCloned, action.player);
        return gameStateCloned;
    }
    if (action.type === "SERVER_MOVEMENT"){
        const gameStateCloned = Object.assign({}, game);
        gameStateCloned.cells = [...game.cells];
        insertInFirstRow(action.serverMovement.column, gameStateCloned, action.player);
        return gameStateCloned;
    }
    return game
}


const insertInFirstRow = (column, game, player) => {
    const rowsInCollumns = _.map(_.filter(game.cells, cell => cell.column == column), cell => cell.row);
    if (rowsInCollumns.length == 0) {
        game.cells.push({
            row: "row6",
            column: column,
            player: player
        });
        return;
    }
    const orderCells = _.orderBy(rowsInCollumns);
    const topCellOcupied = orderCells[0];
    const nextIndex = _.indexOf(["row1", "row2", "row3", "row4", "row5", "row6"], topCellOcupied);
    const firstRow = "row" + nextIndex;
    if(nextIndex >= 1) game.cells.push({
        row: firstRow,
        column: column,
        player: player
    });
}

export default gameReducer;