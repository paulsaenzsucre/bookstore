import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesreducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesreducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
