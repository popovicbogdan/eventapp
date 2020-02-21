import {
  GET_ITEMS,
  SET_SEARCH_INFO,
  CREATE_NEW_EVENT,
  REMOVE_CUSTOM_EVENT,
  SET_CUSTOM_EVENT_AUTHOR,
  SET_DATE,
  CANCEL_CUSTOM_EVENTS
} from "../actions/actionTypes";

const initState = { items: [], searchInfo: "", filteredItems: [] };

function itemsReducer(state = initState, action) {
  let eventsList = [...state.items];
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
    case CREATE_NEW_EVENT:
      eventsList.unshift({
        isCustom: true,
        id: action.id,
        author: "",
        width: 0,
        height: 0,
        url: "",
        download_url: ""
      });
      return {
        ...state,
        items: eventsList
      };
    case REMOVE_CUSTOM_EVENT:
      let newItems = eventsList.filter(item => item.id !== action.id);
      return {
        ...state,
        items: newItems
      };
    case CANCEL_CUSTOM_EVENTS:
      return {
        ...state,
        items: [...eventsList.filter(item => !item.isCustom)]
      };
    case SET_CUSTOM_EVENT_AUTHOR:
      eventsList[0] = { ...eventsList[0], author: action.payload };
      return {
        ...state,
        items: eventsList
      };
    case SET_DATE:
      eventsList.find(
        item => item.id === action.id
      ).height = action.payload.toLocaleString();

      return {
        ...state,
        items: eventsList
      };
    default:
      return state;
  }
}
export default itemsReducer;
