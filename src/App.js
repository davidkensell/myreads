import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import AllShelves from './components/AllShelves.js';
import Search from './components/Search.js';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleMove = this.handleMove.bind(this);
    this.searchClose = this.searchClose.bind(this);
    this.state = {
      showSearchPage: false,
      books: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  handleMove(book, shelf) {
    //copy and edit local book list for fast render while async in background

    // copy so can manipulate before setting state
    let copyBooks = this.state.books.slice();

    // add books from search results if not already found
    if (copyBooks.includes(book)) {
      console.log('book already included');
    } else {
      copyBooks.push(book);
    }

    // identify book and move shelf in our copy
    const bookID = book.id;
    const index = copyBooks.findIndex(book => book.id === bookID);
    const movingBook = copyBooks[index];
      movingBook.shelf = shelf;
      copyBooks.splice(index, 1, movingBook);

    // update state
    this.setState ({ books: copyBooks })
    // call API
    BooksAPI.update(book, shelf)
     .catch(function(error) {
        console.log("failed API book move", error); 
    })
  }

  getBooks() {
    BooksAPI.getAll()
      .then(books => this.setState({books: books}))
      .catch(function(error) {
        console.log("failed book fetch", error);
      })
  }

  searchClose() {
    this.setState({showSearchPage: false});
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search 
            close={this.searchClose}
            action={this.handleMove}
            books={this.state.books}
            />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <AllShelves 
            books={this.state.books}
            action={this.handleMove}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
          )}
      </div>
    )
  }
}

export default BooksApp
