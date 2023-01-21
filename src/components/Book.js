import { Component } from 'react';
import PropTypes from 'prop-types';
import CircleProgress from './CircleProgress';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calcPercentStat = (ratio) => `${Math.round(ratio * 100.0)}%`;

  render = () => {
    const {
      category,
      title,
      author,
      chapters,
      currentChapter,
    } = this.props;

    return (
      <div className="bookCardCont">
        <div className="book">
          <div className="bookInfo">
            <p className="bookCat">{category}</p>
            <p className="bookTitle">{title}</p>
            <p className="bookAuthor">{author}</p>
          </div>
          <div className="actionBar">
            <button type="button" className="actionBtn">Comments</button>
            <hr />
            <button type="button" className="actionBtn">Remove</button>
            <hr />
            <button type="button" className="actionBtn">Edit</button>
          </div>
        </div>
        <div className="progress">
          <div className="circleProgress">
            <CircleProgress ratio={currentChapter / chapters} />
          </div>
          <div className="progressStats">
            <p className="percentStat">{this.calcPercentStat(currentChapter / chapters)}</p>
            <p className="completed">Completed</p>
          </div>
          <hr />
          <div>
            <p className="currentTitle">CURRENT CHAPTER</p>
            <p className="currentChapter">
              {`Chapter ${currentChapter}`}
            </p>
            <button type="button" className="current-btn">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  };
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapters: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
