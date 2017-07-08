import axios from 'axios';
import store from '../index'

export const serverMovementAction = () => {
    return {
        type: 'SERVER_MOVEMENT',
        player: "PLAYER_2",
        serverMovement: getServerNextMovement()
    }
}

const getServerNextMovement = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('http://localhost:8181/state', store.getState().game.cells
    ).then( (response) => {
        return {
            row: response.data.row,
            column: response.data.column
        };
    }).catch( (response) => {
        console.log(error);
    });
}
export default serverMovementAction;