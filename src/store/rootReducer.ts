import { combineReducers } from '@reduxjs/toolkit';

//REDUCERS
import errorReducer from './errorSlice';
import movieReducer from './movieSlice';

const rootReducer = combineReducers({
  errors: errorReducer,
  movies: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
