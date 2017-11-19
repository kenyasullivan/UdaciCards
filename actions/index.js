export const ADD_DECK = "ADD_DECK";
export const RECEIVE_DECK_LIST = "RECEIVE_DECK_LIST";
export const RECEIVE_SINGLE_DECK = "RECEVE_SINGLE_DECK";

export function receiveDeckList(decks) {
  return {
    type: RECEIVE_DECK_LIST,
    decks
  };
}

export function receiveDeck(key) {
  return {
    type: RECEIVE_SINGLE_DECK,
    key
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}
