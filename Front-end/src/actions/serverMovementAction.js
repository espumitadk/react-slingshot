import axios from 'axios';
import store from '../index'

function serverNextMovement(movement) {
        return {
        type: 'SERVER_MOVEMENT',
        player: "PLAYER_2",
        serverMovement: movement
    };
}

export const serverMovementAction = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return dispatch => {
        return  axios.post('http://localhost:8181/state', store.getState().game.cells
                ).then( (response) => {
                    dispatch(serverNextMovement(response.data));
                }).catch( (response) => {
                    console.log(response);
                });
    }
}

export default serverMovementAction;