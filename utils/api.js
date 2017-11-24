import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "Flashcards:decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return JSON.parse(results);
  });
}

export function getDeck(id) {
  return decks[id];
}

export function saveDeckTitle(title) {
  // return AsyncStorage.mergeItem(
  //   DECKS_STORAGE_KEY,
  //   JSON.stringify({
  //     [deck.title]: deck
  //   })
  // );
  getDecks().then(decks => {
    if (!decks[title]) {
      decks[title] = {
        title: title,
        questions: []
      };
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
  });
}

export function addCardToDeck(title, card) {
  getDecks().then(decks => {
    const deck = decks[title];
    deck.cards.push(card);
    return saveDeckTitle({ [title]: deck });
  });
}

// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
