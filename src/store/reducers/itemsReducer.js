import { GET_ITEMS, SET_SEARCH_INFO } from "../actions/actionTypes";

const initState = { items: [], searchInfo: "", filteredItems: [] };

function itemsReducer(state = initState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case SET_SEARCH_INFO:
      return {
        ...state,
        searchInfo: action.payload
      };

    default:
      return state;
  }
}
export default itemsReducer;
