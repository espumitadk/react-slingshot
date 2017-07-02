import axios from 'axios';

export const serverStartGameAction = () => {
    return {
        type: 'SERVER_START_GAME',
        player: "PLAYER_2",
        serverMovement: getServerFirstMovement()
    }
}

const getServerFirstMovement = () => {
    axios.get('http://192.168.99.100/startGame/')
    .then( (response) => {
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