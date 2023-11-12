import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movie0 from './images/movie0.jpg';
import movie1 from './images/movie1.jpg';
import movie2 from './images/movie2.jpg';
import movie3 from './images/movie3.jpg';
import movie4 from './images/movie4.jpg';

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [movie0, movie1, movie2, movie3, movie4],
      currentIndex: 0
    };
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.state.images.length) % this.state.images.length
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length
    }));
  };

  render() {
    return (
      <div style={slideshowStyle}>
        <button onClick={this.handlePrevClick}>Previous</button>
        <img style={{ height: '250px' }} src={this.state.images[this.state.currentIndex]} alt="image" />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

Demo2.propTypes = {
  state: PropTypes.object.isRequired
};

const slideshowStyle = {
  minHeight: '20vh',
  backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Demo2;
