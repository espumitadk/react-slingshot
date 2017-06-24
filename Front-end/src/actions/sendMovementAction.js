export const sendMovementAction = (row, column) => {
    return {
        type: 'SEND_MOVEMENT',
        player: "PLAYER1",
        row: row,
        column: column
    }
}

export default sendMovementAction;