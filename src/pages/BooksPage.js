import { Component } from 'react';
import AddBookForm from '../components/AddBookForm';
import Booklist from '../components/Booklist';

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div>
      <Booklist />
      <hr />
      <AddBookForm />
    </div>
  );
}
export default BooksPage;
