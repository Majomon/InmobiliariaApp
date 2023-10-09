import axios from "axios";

export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";

// Trae todos los Pokemon
export const getAllProperties = () => {
  return async (dispatch) => {
    try {
      const prop = await axios.get(`/properties`);
      dispatch({ type: GET_ALL_PROPERTIES, payload: prop.data });
    } catch (error) {
      return [];
    }
  };
};
