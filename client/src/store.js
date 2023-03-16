import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
import logReducer from './reducers/logReducer';
import techReducer from './reducers/techReducer';
const store = configureStore({
     reducer: {
          root: rootReducer,
          log: logReducer,
          tech: techReducer
     }, 
});

export default store;