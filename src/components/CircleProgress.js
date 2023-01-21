import { Component } from 'react';
import PropTypes from 'prop-types';

class CircleProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  #getStroke = (ratio) => 565.48 * (1 - ratio);

  render = () => {
    const { ratio } = this.props;
    return (
      <svg id="svg" width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0" stroke="#e8e8e8" strokeWidth={10} />
        <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset={this.#getStroke(ratio)} stroke="#307bbe" strokeWidth={10} transform="rotate(-90, 100, 100)" />
      </svg>
    );
  };
}

CircleProgress.propTypes = {
  ratio: PropTypes.number.isRequired,
};
export default CircleProgress;
