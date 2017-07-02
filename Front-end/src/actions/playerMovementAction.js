import axios from 'axios';
import store from '../index'

export const playerMovementAction = (row, column) => {

    return {
        type: 'PLAYER_MOVEMENT',
        player: "PLAYER_1",
        row: row,
        column: column
    }
}
export default playerMovementAction;