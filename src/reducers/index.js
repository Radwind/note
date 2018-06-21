import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ADD_COMMENT } from '../actions';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        title: action.title,
        text: action.text,
        id: action.id,
        comments: action.comments
      };

    case EDIT_NOTE:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        title: action.title,
        text: action.text
      });

    case ADD_COMMENT:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            cId: action.cId,
            author: action.author,
            comment: action.comment,
            date: action.date
          }
        ]
      };
    default:
      return state;
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [ noteReducer(undefined, action), ...state,];
    case DELETE_NOTE:
      const index = state.findIndex((note) => note.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case EDIT_NOTE:
      return state.map((note) => noteReducer(note, action));
    case ADD_COMMENT:
      return state.map((note) => noteReducer(note, action));
    default:
      return state;
  }
};

export default reducer;
