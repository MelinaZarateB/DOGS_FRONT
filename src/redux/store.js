import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; /* middleware que hace que redux trabaje con asincronia */
import Reducer from './reducer'

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
