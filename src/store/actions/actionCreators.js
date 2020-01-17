import { GET_ITEMS, SET_SEARCH_INFO } from "./actionTypes";
import axios from "axios";

export const getItems = () => dispatch => {
  axios
    .get("https://picsum.photos/v2/list?page=22&limit=9")
    .then(resp => dispatch({ type: GET_ITEMS, payload: resp.data }))
    .catch(err => console.log(err));
};

export const setSearchInfo = text => ({
  type: SET_SEARCH_INFO,
  payload: text
});
