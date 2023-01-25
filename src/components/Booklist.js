import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
          chapters={book.chapters}
          currentChapter={book.currentChapter}
        />
      ))}
    </div>
  );
};

export default Booklist;
