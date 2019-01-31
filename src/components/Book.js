import React from 'react';
import Mover from './Mover.js';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: '',
      title: '',
      author: '',
      shelf: '',
    };
  }

  render () {
  	return (
  		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{this.state.cover}")' }}></div>
            <Mover />
          </div>
          <div className="book-title">{this.state.title}</div>
          <div className="book-authors">{this.state.author}</div>
        </div>
        )
  }
}

export default Book;