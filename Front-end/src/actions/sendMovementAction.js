import axios from 'axios';
import store from '../index'

export const sendMovementAction = (row, column) => {
    return {
        type: 'SEND_MOVEMENT',
        player: "PLAYER_1",
        row: row,
        column: column,
        call: sentStateToServer()
    }
}

const sentStateToServer = () => {
    axios.get('http://localhost/', {
        params: {
            state: store.getState()
        }
    })
    .then( (response) => {
        console.log(response.data);
    })
    .catch( (response) => {
        console.log(error);
    });

}
export default sendMovementAction;