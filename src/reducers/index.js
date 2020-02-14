import { combineReducers } from 'redux';
import clientsData from './clientsReducers';

const rootReducers = combineReducers({
    clientsData
});

export default rootReducers;