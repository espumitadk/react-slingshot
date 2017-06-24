import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const combinedReducers = combineReducers({
    game: gameReducer
});

export default combinedReducers;