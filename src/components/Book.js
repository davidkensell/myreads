import React from 'react';
import Mover from './Mover.js';

class Book extends React.Component {

  render() {
    const book = this.props.book;
    let bgImage = '';

    if (typeof book.imageLinks === 'undefined') {
      bgImage = 'none';
    } else {
      bgImage = 'url(' + book.imageLinks.thumbnail + ')';
    }

    const coverStyle = {
      width: 128, 
      height: 193, 
      backgroundImage: bgImage
    }

  	return (
  		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={coverStyle}>
            </div>
            <Mover
              books={this.props.books}
              book={this.props.book}
              action={this.props.action} 
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
        )
  }
}

export default Book;