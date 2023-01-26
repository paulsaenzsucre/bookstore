import { v4 as uuidv4 } from 'uuid';
import getBooks from '../../modules/BookstoreApi';

// Helpers
const getRandomProgress = () => {
  const chapters = Math.round(15 + Math.random() * 50);
  const currentChapter = Math.round(Math.random() * chapters);

  return ({
    chapters,
    currentChapter,
  });
};

// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_START = 'bookStore/books/FETCH_BOOKS_START';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_ERROR = 'bookStore/books/FETCH_BOOKS_ERROR';

// Action Creators
const fetchBooksStarted = () => ({
  type: FETCH_BOOKS_START,
});

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books.map((book) => ({
    ...book,
    ...getRandomProgress(),
  })),
});

const fetchBooksFailed = (error) => ({
  type: FETCH_BOOKS_ERROR,
  error,
});

const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksStarted());

  try {
    const books = await getBooks();
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailed(error.toString()));
  }
};

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_BOOKS_START:
      console.log('Start fetching books');
      return [];

    case FETCH_BOOKS_SUCCESS:
      console.log('Success: ', action.payload);
      return action.payload;

    case FETCH_BOOKS_ERROR:
      console.log('Failed');
      return [];

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    category: 'Miscellaneous',
    ...book,
    ...getRandomProgress(),
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export {
  reducer as default,
  addBook,
  removeBook,
  fetchBooks,
};
