import {createStore,combineReducers} from 'redux'
import filtersReducer from '../reducers/filter';
import moviesReducer from '../reducers/movie';
import userReducer from '../reducers/user';


export default ()=>{
    const store = createStore(combineReducers({
        movies:moviesReducer,
        filters:filtersReducer,
        user:userReducer
    }))
    return store;
}