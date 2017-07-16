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
            row: 1,
            column: column,
            player: player
        });
        return;
    }
    const orderCells = _.orderBy(rowsInCollumns);
    const topCellOcupied = orderCells[orderCells.length-1];
    const nextRow = topCellOcupied + 1;
    if(nextRow <= 6) game.cells.push({
        row: nextRow,
        column: column,
        player: player
    });
}

export default gameReducer;