import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletingBook } from '../redux/books/books';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
    dispatch(deletingBook(id));
  };

  return (
    <div className="book-list">
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
