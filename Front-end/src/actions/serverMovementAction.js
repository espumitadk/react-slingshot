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
    axios.get('http://192.168.99.100/nextMovement/', {
        params: {
            state: store.getState().game.cells 
        }
    }).then( (response) => {
        console.log(response.data);
    })
    .catch( (response) => {
        console.log(error);
    });
    return {
        row: "row6",
        column: "column1"
    }
}
export default serverMovementAction;