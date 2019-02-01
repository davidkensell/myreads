import React from 'react';
import ReactDOM from 'react-dom';

import Shelf from './Shelf.js';

function AllShelves(props) {

    const books = props.books;
    let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    let read = books.filter((book) => book.shelf === 'read');

    return (

      <div className="list-books-content">
        <div>
          <Shelf
            books={currentlyReading} 
            title={'Currently Reading'}
            filter={'currentlyReading'} 
          />
          <Shelf 
            books={wantToRead}
            title={'Want to Read'}
            filter={'wantToRead'}
            />
          <Shelf 
            books={read}
            title={'Read'}
            filter={'read'}
            />
        </div>
      </div>
    )
  }

export default AllShelves;