import { ADD_DECK, RECEIVE_DECK_LIST, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECK_LIST:
      return {
        ...state,
        ...action.decks
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.card]
        }
      };
    default:
      return state;
  }
}

export default decks;
