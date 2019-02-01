import React from 'react';
import ReactDOM from 'react-dom';

import Book from './Book.js';


class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfBooks: [],
    }
  }

  render() {
	return (
	<div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {this.props.books.map(book => 
          <li key={book.id}>
            <Book 
              book={book}
              />
          </li>
          )}
      </ol>
    </div>
  </div>
    )
  }
}

export default Shelf;