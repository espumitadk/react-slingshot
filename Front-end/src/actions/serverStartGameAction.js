import axios from 'axios';
import store from '../index'

export const serverStartGameAction = () => {
    return {
        type: 'SERVER_START_GAME',
        player: "PLAYER_2",
        serverMovement: getServerFirstMovement()
    }
}

const getServerFirstMovement = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('http://localhost:8181/state', store.getState().game.cells
    ).then( (response) => {
        console.log(response.data);
    }).catch( (response) => {
        console.log(error);
    });
    return {
        row: "row6",
        column: "column4"
    }
}
export default serverStartGameAction;