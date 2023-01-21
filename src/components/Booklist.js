import { Component } from 'react';
import Book from './Book';

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        id: 0,
        category: 'Action',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        chapters: 25,
        currentChapter: 16,
      },
      {
        id: 1,
        category: 'Science Fiction',
        title: 'Dune',
        author: 'Frank Herbert',
        chapters: 25,
        currentChapter: 2,
      },
      {
        id: 2,
        category: 'Economy',
        title: 'Capital in the Twenty-First century',
        author: 'Suzanne Collins',
        chapters: 30,
        currentChapter: 0,
      },
      ],
    };
  }

  render = () => {
    const { books } = this.state;
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
  }
}
export default Booklist;
