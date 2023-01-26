import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers';

const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
