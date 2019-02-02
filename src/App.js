import React from 'react';
import ReactDOM from 'react-dom';
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

  handleMove(book, shelf) {
    BooksAPI.update(book, shelf)
     .then(this.getBooks())
     .catch(console.log('Failed move'))
    }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then(books => this.setState({books: books}))
      .catch(console.log('Failed to get books'))
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
