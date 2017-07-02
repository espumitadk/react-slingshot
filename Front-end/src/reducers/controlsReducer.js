
const initialControls = {
    gameControls: {
        gameStarted: false
    }
}

const controlsReducer = (controls = initialControls, action) => {
    if (action.type === "SERVER_START_GAME") {
        controls = {...controls };
        controls.gameControls.gameStarted = true;
    }
    return controls
}

export default controlsReducer;