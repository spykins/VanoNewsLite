import {createStore, combineReducers, compose} from 'redux';
import navigationReducers from './../reducers/NavigationReducer';

 let composeEnhancers =  compose;


 if (__DEV__) {
     composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 }

 const rootReducer =  combineReducers({
     navigationReducers
 });

 const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());

 }

 export default configureStore;
