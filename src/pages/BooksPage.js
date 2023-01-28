import { Component } from 'react';
import AddBookForm from '../components/AddBookForm';
import Booklist from '../components/Booklist';

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="books-page">
      <Booklist />
      <hr className="horizontal-sep books-sep" />
      <AddBookForm />
    </div>
  );
}
export default BooksPage;
