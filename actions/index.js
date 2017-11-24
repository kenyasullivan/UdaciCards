export const ADD_DECK = "ADD_DECK";
export const RECEIVE_DECK_LIST = "RECEIVE_DECK_LIST";
export const ADD_CARD = "ADD_CARD";

export function receiveDeckList(decks) {
  return {
    type: RECEIVE_DECK_LIST,
    decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}
