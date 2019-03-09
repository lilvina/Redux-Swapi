import { FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isWorking: true,
  err: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_START:
      return {
        ...state,
        isWorking: true,
        err: null
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isWorking: false,
        err: null
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        isWorking: false,
        err: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
