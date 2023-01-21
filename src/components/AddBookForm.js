import { Component } from 'react';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div>
      <p>ADD NEW BOOK</p>
      <form>
        <input type="text" placeholder="Book title" name="bookTitle" />
        <input type="text" placeholder="Book author" name="bookAuthor" />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}
export default AddBookForm;
