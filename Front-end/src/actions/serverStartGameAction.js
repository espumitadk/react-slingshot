import axios from 'axios';
import store from '../index'



function serverStartGame(movement){
    return {
        type: 'SERVER_START_GAME',
        player: "PLAYER_2",
        serverMovement: movement
    };
}

export const serverStartGameAction = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return dispatch => {
        return  axios.post('http://localhost:8181/state', store.getState().game.cells
                ).then( (response) => {
                    dispatch(serverStartGame(response.data));
                }).catch( (response) => {
                    console.log(response);
                });
    }
}

export default serverStartGameAction;