// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Reducer
const reducer = (state = [], action = {}) => {
  let newState;
  switch (action.type) {
    case ADD_BOOK:
      newState = [...state];
      return newState.push(action.payload);

    case REMOVE_BOOK:
      newState = state.filter((book) => book.id !== action.payload.id);
      return newState.push(action.payload);

    default: return state;
  }
};

// Action Creators
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export {
  reducer as default,
  addBook,
  removeBook,
};
