import axios from 'axios';
import store from '../index'
import serverMovementAction from './serverMovementAction'

export const playerMovementAction = (row, column) => {
    store.dispatch(serverMovementAction()); //MUST SEND TO THE SERVER WITH OTHER ACTION
    return {
        type: 'SEND_MOVEMENT',
        player: "PLAYER_1",
        row: row,
        column: column
    }
}
export default playerMovementAction;