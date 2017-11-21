import { ADD_DECK, RECEIVE_DECK_LIST, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECK_LIST:
      return {
        ...state,
        ...actions.decks
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          cards: []
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...action[action.title],
          cards: [...state[action.title].cards, action.card]
        }
      };
    default:
      return state;
  }
}

export default decks;
