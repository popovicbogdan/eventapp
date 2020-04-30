import {
  CHANGE_BG_COLOR_SUCCESS,
  CHANGE_BG_COLOR_FAIL
  //   CHANGE_TEXT_COLOR_SUCCESS,
  //   CHANGE_TEXT_COLOR_FAIL
} from '../actions/actionTypes';
import produce from 'immer';
import { componentColor, textColor } from './contants';

const initState = {
  componentColor: componentColor,
  textColor: textColor
};

function primaryColorReducer(state = initState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_BG_COLOR_SUCCESS:
        handleChangeBgColorSuccess(draft, action);
        break;
      case CHANGE_BG_COLOR_FAIL:
        handleChangeBgColorFail(draft);
        break;
    }
  });
}

function handleChangeBgColorSuccess(state, { payload }) {
  state.componentColor = payload;
}

function handleChangeBgColorFail(state) {
  state.componentColor = componentColor;
}

export default primaryColorReducer;
