import axios from "axios";
import { toast } from "sonner";

//Propiedades
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";
export const GET_PROPERTY_ID = "GET_PROPERTY_ID ";
//Usuarios
export const GET_ALL_USERS = "GET_ALL_USERS";
export const LOGIN_USER = "LOGIN_USER";

export const POST_RESEND = "POST_RESEND";
export const GET_SEARCH_FILTER = "GET_SEARCH_FILTER";

export const CLEAR_DETAILS_STATE = "CLEAR_DETAILS_STATE";
export const CLEAR_SEARCH_STATE = "CLEAR_SEARCH_STATE";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// Trae todas las propiedades
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

// Trae propiedad por ID
export const getPropertiesId = (id) => {
  return async (dispatch) => {
    try {
      const detail = await axios.get(`/properties/${id}`);
      dispatch({ type: GET_PROPERTY_ID, payload: detail.data });
    } catch (error) {
      return [];
    }
  };
};

// Trae todos los usuarios
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const prop = await axios.get(`/users`);
      dispatch({ type: GET_ALL_USERS, payload: prop.data });
    } catch (error) {
      return [];
    }
  };
};

// Trae usuario por ID
export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/users/login`, user);
      window.localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Logeado");
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure());
      toast.error("Los datos ingresados son incorrectos");
      throw new Error("Los datos ingresados son incorrectos");
    }
  };
};

export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData,
});

export const loginUserFailure = () => ({
  type: LOGIN_USER_FAILURE,
});

// Enviar email
export const postResend = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/resend", formData);
      dispatch({ type: POST_RESEND, payload: response });
    } catch (error) {
      return [];
    }
  };
};

// Filtro
export const getSearchFilter = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/search`, data);
      dispatch({ type: GET_SEARCH_FILTER, payload: response.data });
    } catch (error) {
      return [];
    }
  };
};

// Acción que permite limpiar el estado de detalles
export const clearDetailsState = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR_DETAILS_STATE });
  };
};

// Acción que permite limpiar el estado de search
export const clearSearchsState = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR_SEARCH_STATE });
  };
};
