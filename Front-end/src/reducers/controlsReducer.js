
const initialControls = {
    gameControls: {
        gameStarted: false,
        gameTurn: ""
    }
}

const controlsReducer = (controls = initialControls, action) => {
    if (action.type === "SERVER_START_GAME") {
        controls = {...controls };
        controls.gameControls.gameStarted = true;
    }
    if (action.type === "PLAYER_MOVEMENT") {
        controls = {...controls };
        controls.gameControls.gameTurn = "SERVER";
    }
    if (action.type === "SERVER_MOVEMENT") {
        controls = {...controls };
        controls.gameControls.gameTurn = "PLAYER";
    }
    return controls
}

export default controlsReducer;