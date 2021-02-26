import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { ContentReducer } from './reducers/content';

export default createStore(
  combineReducers({
    content: ContentReducer,
  }),
  applyMiddleware(ReduxThunk)
);
