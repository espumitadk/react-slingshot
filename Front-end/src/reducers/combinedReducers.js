import { combineReducers } from 'redux';
import userReducer from './userReducer';
import otherReduce from './otherReduce';

const combinedReducers = combineReducers({
    user: userReducer,
    otherComponent: otherReduce
});

export default combinedReducers;