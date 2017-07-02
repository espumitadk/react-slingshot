import axios from 'axios';
import store from '../index'

export const playerMovementAction = (row, column) => {
    //MUST SEND TO THE SERVER WITH OTHER ACTION
    return {
        type: 'SEND_MOVEMENT',
        player: "PLAYER_1",
        row: row,
        column: column
    }
}
export default playerMovementAction;