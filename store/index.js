import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import authenticationReducer from './reducers/authentication';

const rootReducer = combineReducers({
  authentication: 'authenticationReducer',
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
