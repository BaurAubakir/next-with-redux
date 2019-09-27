import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { entities } from './reducers/entities';

const exampleInitialState = {
  entities: null,
  current: null,
  loading: false,
  error: null
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    entities,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
