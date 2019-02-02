import React from 'react';
import Mover from './Mover.js';

class Book extends React.Component {

  render() {
  	return (
  		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}>
            </div>
            <Mover 
              book={this.props.book}
              action={this.props.action} 
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
        )
  }
}

export default Book;