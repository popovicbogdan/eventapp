import {
  CHANGE_BG_COLOR_SUCCESS,
  CHANGE_BG_COLOR_FAIL
  //   CHANGE_TEXT_COLOR_SUCCESS,
  //   CHANGE_TEXT_COLOR_FAIL
} from "../actions/actionTypes";

const initState = {
  componentColor: "000000",
  textColor: "800080"
};

export function primaryColorReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_BG_COLOR_SUCCESS:
      console.log("SUCCESS");

      return {
        ...state,
        componentColor: action.payload
      };
    case CHANGE_BG_COLOR_FAIL:
      console.log("FAIL");

      return {
        ...state,
        componentColor: "000000"
      };

    default:
      return state;
  }
}
