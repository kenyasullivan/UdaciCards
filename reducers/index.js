import { ADD_DECK, RECEIVE_DECK_LIST, RECEIVE_SINGLE_DECK } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECK_LIST:
      return {
        ...state,
        ...actions.decks
      };
    case RECEIVE_SINGLE_DECK:
      return {
        ...state
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    default:
      return state;
  }
}

export default decks;
