import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    filtersReducer,
    pizzasReducer,
});