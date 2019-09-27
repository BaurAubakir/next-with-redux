import {
  GET_ENTITIES,
  SET_LOADING,
  ENTITIES_ERROR,
  ADD_ENTITY,
  DELETE_ENTITY,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ENTITY,
  SEARCH_ENTITIES
} from '../actions/actionTypes';

const exampleInitialState = {};

export const entities = (state = exampleInitialState, { type, payload }) => {
  switch (type) {
    case GET_ENTITIES:
      return {
        ...state,
        entities: payload,
        loading: false
      };
    case ADD_ENTITY:
      return {
        ...state,
        entities: [...state.entities, payload],
        loading: false
      };
    case DELETE_ENTITY:
      return {
        ...state,
        entities: state.entities.filter(entity => entity.id !== payload),
        loading: false
      };
    case UPDATE_ENTITY:
      return {
        ...state,
        entities: state.entities.map(entity =>
          entity.id === payload.id ? payload : entity
        )
      };
    case SEARCH_ENTITIES:
      return {
        ...state,
        entities: payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ENTITIES_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
