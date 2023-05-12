import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
 };

const rootReducer = (state = initialState, {type, payload}) => {
    switch ( type ) {
        case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.allCharacters, payload],
            allCharacters: [...state.allCharacters, payload],
        }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== payload)
            }

        case FILTER: 
        return {
            ...state,
            myFavorites: state.allCharacters.filter((character) => character.gender === payload)
        }

        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites: payload === 'A'
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        default: return {...state};
    }
};

export default rootReducer;