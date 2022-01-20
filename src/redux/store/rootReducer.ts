import {combineReducers} from 'redux';

import youtubeReducer from './youtube/reducer';

const rootReducer = combineReducers({
  youtube: youtubeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
