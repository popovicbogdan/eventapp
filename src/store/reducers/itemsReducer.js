import {
  GET_ITEMS,
  SET_SEARCH_INFO,
  CREATE_NEW_EVENT,
  REMOVE_CUSTOM_EVENT,
  SET_CUSTOM_EVENT_AUTHOR,
  SET_DATE,
  CANCEL_CUSTOM_EVENTS
} from '../actions/actionTypes';

import produce from 'immer';

const initState = {
  items: [],
  searchInfo: ''
};

function itemsReducer(state = initState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ITEMS:
        handleGetItems(draft, action);
        break;
      case SET_SEARCH_INFO:
        handleSetSearchInfo(draft, action);
        break;
      case CREATE_NEW_EVENT:
        handleCreateNewEvent(draft, action);
        break;
      case REMOVE_CUSTOM_EVENT:
        handleRemoveCustomEvent(draft, action);
        break;
      case CANCEL_CUSTOM_EVENTS:
        draft.items = draft.items.filter((item) => !item.isCustom);
        break;
      case SET_CUSTOM_EVENT_AUTHOR:
        handleSetCustomEventAuthor(draft, action);
        break;
      case SET_DATE:
        handeSetCustomEventDate(draft, action);
        break;
      default:
        return state;
    }
  });
}

function handleGetItems(state, { payload }) {
  Object.assign(state, { items: payload });
}

function handleSetSearchInfo(state, { payload }) {
  Object.assign(state, { searchInfo: payload });
}

function handleSetCustomEventAuthor(state, { payload, id }) {
  let item = state.items.find((item) => item.id === id);
  item.author = payload;
}

function handleRemoveCustomEvent(state, { id }) {
  state.items = state.items.filter((item) => item.id !== id);
}

function handleCreateNewEvent(state, { id }) {
  const newEvent = {
    isCustom: true,
    id: id,
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: ''
  };
  state.items.unshift(newEvent);
}

function handeSetCustomEventDate(state, { payload, id }) {
  let item = state.items.find((item) => item.id === id);
  item.height = payload.toLocaleString();
}

export default itemsReducer;
