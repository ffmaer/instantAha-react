import { EDIT_WORD } from "redux/actionTypes";

const initialState = {
  word: "cosmos",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_WORD:
      return { word: action.new_word };
    default:
      return state;
  }
}
