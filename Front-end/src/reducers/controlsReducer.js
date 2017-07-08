
const initialControls = {
    gameControls: {
        gameStarted: false,
        gameTurn: ""
    }
}

const controlsReducer = (controls = initialControls, action) => {
    if (action.type === "SERVER_START_GAME") {
        const controlsStateCloned = Object.assign({}, controls);
        controlsStateCloned.gameControls = {...controls.gameControls}
        controlsStateCloned.gameControls.gameStarted = true;
        return controlsStateCloned;
    }
    if (action.type === "PLAYER_MOVEMENT") {
        const controlsStateCloned = Object.assign({}, controls);
        controlsStateCloned.gameControls = {...controls.gameControls}
        controlsStateCloned.gameControls.gameTurn = "SERVER";
        return controlsStateCloned;
    }
    if (action.type === "SERVER_MOVEMENT") {
        const controlsStateCloned = Object.assign({}, controls);
        controlsStateCloned.gameControls = {...controls.gameControls}
        controlsStateCloned.gameControls.gameTurn = "PLAYER";
        return controlsStateCloned;
    }
    return controls
}

export default controlsReducer;