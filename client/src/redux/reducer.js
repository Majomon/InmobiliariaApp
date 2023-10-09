import { GET_ALL_PROPERTIES } from "./actions";

const initialState = {
  propiedades: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        propiedades: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
