import React from 'react';
import ReactDOM from 'react-dom';

import Mover from './Mover.js';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  	return (
  		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}>
            </div>
            <Mover />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
        )
  }
}

export default Book;