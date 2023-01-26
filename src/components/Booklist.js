import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
          chapters={book.chapters}
          currentChapter={book.currentChapter}
          removeBook={removeBookHandler}
        />
      ))}
    </div>
  );
};

export default Booklist;
