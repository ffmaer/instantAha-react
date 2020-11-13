import {EDIT_WORD} from 'redux/actionTypes';
export const editWord = (new_word) => ({
  type: EDIT_WORD,
  new_word,
});
