import React from 'react';
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
            action={props.action} 
          />
          <Shelf 
            books={wantToRead}
            title={'Want to Read'}
            filter={'wantToRead'}
            action={props.action} 
            />
          <Shelf 
            books={read}
            title={'Read'}
            filter={'read'}
            action={props.action} 
            />
        </div>
      </div>
    )
  }

export default AllShelves;