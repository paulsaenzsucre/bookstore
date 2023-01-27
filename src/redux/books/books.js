import { v4 as uuidv4 } from 'uuid';
import getBooks, { postBook } from '../../modules/BookstoreApi';

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
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_START = 'bookStore/books/FETCH_BOOKS_START';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_ERROR = 'bookStore/books/FETCH_BOOKS_ERROR';
const POST_BOOK_START = 'bookStore/books/POST_BOOK_START';
const POST_BOOK_SUCCESS = 'bookStore/books/POST_BOOK_SUCCESS';
const POST_BOOK_ERROR = 'bookStore/books/POST_BOOK_ERROR';

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_BOOKS_START:
      console.log('Start fetching books');
      return state;

    case FETCH_BOOKS_SUCCESS:
      console.log('Success: ', action.payload);
      return action.payload;

    case FETCH_BOOKS_ERROR:
      console.log('Failed');
      return state;

    case POST_BOOK_START:
      console.log('Start posting book');
      return state;

    case POST_BOOK_SUCCESS:
      console.log('Post Book Success: ', action.payload);
      return [...state, action.payload];

    case POST_BOOK_ERROR:
      console.log('Post Book Failed');
      return state;

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

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

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// Thunks
const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksStarted());

  try {
    const books = await getBooks();
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailed(error.toString()));
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
    console.log(response);
    if (response) {
      dispatch(postBookSuccess(book));
    }
  } catch (error) {
    dispatch(postBookFailed(error.toString()));
  }
};

export {
  reducer as default,
  removeBook,
  fetchBooks,
  postingBook,
};
