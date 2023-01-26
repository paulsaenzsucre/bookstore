import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Reducer
const reducer = (state = [{
  id: uuidv4(),
  category: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  chapters: 25,
  currentChapter: 16,
},
{
  id: uuidv4(),
  category: 'Science Fiction',
  title: 'Dune',
  author: 'Frank Herbert',
  chapters: 25,
  currentChapter: 2,
},
{
  id: uuidv4(),
  category: 'Economy',
  title: 'Capital in the Twenty-First century',
  author: 'Suzanne Collins',
  chapters: 30,
  currentChapter: 0,
},
], action = {}) => {
  let newState;
  switch (action.type) {
    case ADD_BOOK:
      newState = [...state];
      return [...state, action.payload];

    case REMOVE_BOOK:
      newState = state.filter((book) => book.id !== action.payload.id);
      return newState.push(action.payload);

    default: return state;
  }
};

// Action Creators
const addBook = (book) => {
  const chapters = Math.round(15 + Math.random() * 50);
  const currentChapter = Math.round(Math.random() * chapters);

  return {
    type: ADD_BOOK,
    payload: {
      id: uuidv4(),
      category: 'Miscellaneous',
      ...book,
      chapters,
      currentChapter,
    },
  };
};

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export {
  reducer as default,
  addBook,
  removeBook,
};
