import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesreducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesreducer,
  },
});

export default store;
