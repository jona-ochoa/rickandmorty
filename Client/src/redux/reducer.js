import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const existingCharacter = state.myFavorites.find(
        (fav) => fav.id === payload.id
      );
      if (existingCharacter) {
        return { ...state };
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
          allCharacters: [...state.allCharacters, payload],
        };
      }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === payload
        ),
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      const sortedCharacters =
        payload === "A"
          ? allCharactersCopy.sort((a, b) => a.id - b.id)
          : allCharactersCopy.sort((a, b) => b.id - a.id);

      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
