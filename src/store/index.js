import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers';

// Create the store
const store = createStore(rootReducer);

export default store;
