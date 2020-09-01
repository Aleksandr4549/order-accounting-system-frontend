import {useReducer, useEffect} from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetched':
      return {
        ...state,
        isFetching: false,
        responseData: action.payload
      };
    case "error":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case "update_fetch":
      return {
        ...state,
        url: action.payload.url,
        method: action.payload.method,
        data: action.payload.data
      };
    default:
      return state;
  }
}

export const useFetch = (url, method, data) => {
  const [state, dispatch] = useReducer(reducer, {   
    url,
    method,
    responseData: null,
    isFetching: true,
    error: null,
    requestData: data
  });

  const updateFetch = (newUrl, newMethod, data) => {
    dispatch({type: "update_fetch", payload: {url: newUrl, method: newMethod, data}});
  };

  useEffect(() => {
    if(state.method === 'get') {
      axios.get(`${state.url}`)
      .then(response => {
        dispatch({ type: "fetched", payload: response.data.orders });
      })
      .catch(error => {
        dispatch({ type: "error", payload: error });
      });
    }

    if(state.method === 'put') {
      axios.put(`${state.url}`, {
        data: state.data
      })
      .then(response => {
        dispatch({ type: "fetched", payload: response.data.orders });
      })
      .catch(error => {
        dispatch({ type: "error", payload: error });
      });
    }

    if(state.method === 'post') {
      axios.post(`${state.url}`, {
        data: state.data
      })
      .then(response => {
        dispatch({ type: "fetched", payload: response.data.orders });
      })
      .catch(error => {
        dispatch({ type: "error", payload: error });
      });
    }

    if(state.method === 'delete') {
      axios.delete(`api/orders/${state.data}`)
      .then(response => {
        dispatch({ type: "fetched", payload: response.data.orders });
      })
      .catch(error => {
        dispatch({ type: "error", payload: error });
      });
    }
  }, [state.url, state.method, state.data]);

  return [state.responseData, updateFetch];
};
