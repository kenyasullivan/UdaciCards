import { ADD_DECK, RECEIVE_DECK_LIST, ADD_CARD } from "../actions";
import data from "./mockdata.json";

const INITIAL_STATE = {
  " React": {
    "  title": "React",
    " questions": [
      {
        " question": "What is React?",
        " answer": "A library for managing user interfaces"
      },
      {
        " question": "Where do you make Ajax requests in React?",
        " answer": "The componentDidMount lifecycle event"
      }
    ]
  },
  " JavaScript": {
    title: "JavaScript",
    " questions": [
      {
        question: "What is a closure?",
        " answer":
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

function decks(state = INITIAL_STATE, action) {
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
