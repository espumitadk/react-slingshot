import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import controlsReducer from './controlsReducer';

const combinedReducers = combineReducers({
    controls: controlsReducer,
    game: gameReducer
});

export default combinedReducers;