import { v4 as uuidv4 } from 'uuid';
import getBooks, { postBook, deleteBook } from '../../modules/BookstoreApi';

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
const GET_BOOKS_START = 'bookStore/books/FETCH_BOOKS_START';
const GET_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const GET_BOOKS_ERROR = 'bookStore/books/FETCH_BOOKS_ERROR';
const POST_BOOK_START = 'bookStore/books/POST_BOOK_START';
const POST_BOOK_SUCCESS = 'bookStore/books/POST_BOOK_SUCCESS';
const POST_BOOK_ERROR = 'bookStore/books/POST_BOOK_ERROR';
const DELETE_BOOK_START = 'bookStore/books/DELETE_BOOK_START';
const DELETE_BOOK_SUCCESS = 'bookStore/books/DELETE_BOOK_SUCCESS';
const DELETE_BOOK_ERROR = 'bookStore/books/DELETE_BOOK_ERROR';

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_BOOKS_START:
      return state;

    case GET_BOOKS_SUCCESS:
      return action.payload;

    case GET_BOOKS_ERROR:
      return state;

    case POST_BOOK_START:
      return state;

    case POST_BOOK_SUCCESS:
      return [...state, action.payload];

    case POST_BOOK_ERROR:
      return state;

    case DELETE_BOOK_START:
      return state;

    case DELETE_BOOK_SUCCESS:
      return state.filter((book) => book.id !== action.payload);

    case DELETE_BOOK_ERROR:
      return state;

    default: return state;
  }
};

// Action Creators
const getBooksStarted = () => ({
  type: GET_BOOKS_START,
});

const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books.map((book) => ({
    ...book,
    ...getRandomProgress(),
  })),
});

const getBooksFailed = (error) => ({
  type: GET_BOOKS_ERROR,
  error,
});

const postBookStarted = () => ({
  type: POST_BOOK_START,
});

const postBookSuccess = (book) => ({
  type: POST_BOOK_SUCCESS,
  payload: book,
});

const postBookFailed = (error) => ({
  type: POST_BOOK_ERROR,
  error,
});

const deleteBookStarted = () => ({
  type: DELETE_BOOK_START,
});

const deleteBookSuccess = (id) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: id,
});

const deleteBookFailed = (error) => ({
  type: DELETE_BOOK_ERROR,
  error,
});

// Thunks
const gettingBooks = () => async (dispatch) => {
  dispatch(getBooksStarted());

  try {
    const books = await getBooks();
    dispatch(getBooksSuccess(books));
  } catch (error) {
    dispatch(getBooksFailed(error.toString()));
  }
};

const postingBook = (bookInfo) => async (dispatch) => {
  dispatch(postBookStarted());
  const id = uuidv4();
  const bookPost = {
    item_id: id,
    category: 'Miscellaneous',
    ...bookInfo,
  };
  const book = {
    id,
    category: 'Miscellaneous',
    ...bookInfo,
    ...getRandomProgress(),
  };

  try {
    const response = await postBook(bookPost);

    if (response) {
      dispatch(postBookSuccess(book));
    }
  } catch (error) {
    dispatch(postBookFailed(error.toString()));
  }
};

const deletingBook = (bookId) => async (dispatch) => {
  dispatch(deleteBookStarted());

  try {
    const response = await deleteBook(bookId);

    if (response) {
      dispatch(deleteBookSuccess(bookId));
    }
  } catch (error) {
    dispatch(deleteBookFailed(error.toString()));
  }
};

export {
  reducer as default,
  deletingBook,
  gettingBooks as fetchBooks,
  postingBook,
};
