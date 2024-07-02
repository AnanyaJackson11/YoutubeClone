// src/store.js
import { createStore } from 'redux';
import rootReducer from './Reducers'; // Ensure you have your root reducer

const store = createStore(rootReducer);

export default store;
