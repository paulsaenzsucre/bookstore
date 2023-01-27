import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postingBook } from '../redux/books/books';

const AddBookForm = () => {
  const emptyBook = () => ({
    title: '',
    author: '',
  });

  const [bookInfo, setBookInfo] = useState(emptyBook());

  const dispatch = useDispatch();

  const onChange = (evt) => {
    setBookInfo({
      ...bookInfo,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postingBook(bookInfo));
    setBookInfo(emptyBook());
  };

  return (
    <div>
      <p>ADD NEW BOOK</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} placeholder="Book title" name="title" required value={bookInfo.title} />
        <input type="text" onChange={onChange} placeholder="Book author" name="author" required value={bookInfo.author} />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBookForm;
