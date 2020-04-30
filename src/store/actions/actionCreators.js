import {
  GET_ITEMS,
  SET_SEARCH_INFO,
  CHANGE_BG_COLOR_SUCCESS,
  CHANGE_BG_COLOR_FAIL,
  CREATE_NEW_EVENT,
  REMOVE_CUSTOM_EVENT,
  SET_CUSTOM_EVENT_AUTHOR,
  SET_DATE,
  CANCEL_CUSTOM_EVENTS,
} from './actionTypes';
import axios from 'axios';

export const getItems = () => (dispatch) => {
  axios
    .get('https://picsum.photos/v2/list?page=22&limit=9')
    .then((resp) => dispatch({ type: GET_ITEMS, payload: resp.data }))
    .catch((err) => console.log(err));
};

export const setSearchInfo = (text) => ({
  type: SET_SEARCH_INFO,
  payload: text,
});

export const changeBgColor = (color) => (dispatch) => {
  if (isHex(color)) {
    dispatch({
      type: CHANGE_BG_COLOR_SUCCESS,
      payload: color,
    });
  } else {
    dispatch({ type: CHANGE_BG_COLOR_FAIL });
  }
};

export const isHex = (hex) =>
  typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex));

export const createCustomEvent = (id) => ({
  type: CREATE_NEW_EVENT,
  id,
});

export const removeCustomEvent = (id) => ({
  type: REMOVE_CUSTOM_EVENT,
  id,
});
export const changeAuthor = (val, id) => ({
  type: SET_CUSTOM_EVENT_AUTHOR,
  payload: val,
  id,
});
export const setDate = (date, id) => ({
  type: SET_DATE,
  payload: date,
  id,
});
export const cancelCustomEvents = (numb) => ({
  type: CANCEL_CUSTOM_EVENTS,
  numb,
});
