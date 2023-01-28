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
      id,
      category,
      title,
      author,
      chapters,
      currentChapter,
      removeBook,
    } = this.props;

    return (
      <div className="border book-card-cont">
        <div className="book">
          <div className="book-info">
            <p className="montserrat-700 book-cat">{category}</p>
            <p className="roboto-700 book-title">{title}</p>
            <p className="roboto-300 book-author">{author}</p>
          </div>
          <div className="action-bar">
            <button type="button" className="outline-button action-btn .roboto-300">Comments</button>
            <hr className="vertical-sep action-sep" />
            <button type="button" className="outline-button action-btn .roboto-300" onClick={() => removeBook(id)}>Remove</button>
            <hr className="vertical-sep action-sep" />
            <button type="button" className="outline-button action-btn .roboto-300">Edit</button>
          </div>
        </div>
        <div className="progress-stats">
          <div className="progress-bar-cont">
            <CircleProgress ratio={currentChapter / chapters} />
          </div>
          <div className="percent-stat montserrat-400">
            <p className="percent-ratio">{this.calcPercentStat(currentChapter / chapters)}</p>
            <p className="percent-text">Completed</p>
          </div>
          <hr className="vertical-sep progress-sep" />
          <div className="progress-chapter roboto-300">
            <p className="currentTitle">CURRENT CHAPTER</p>
            <p className="currentChapter">
              {`Chapter ${currentChapter}`}
            </p>
            <button type="button" className="enfasis-button current-button roboto-300">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  };
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapters: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
