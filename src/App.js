import React from 'react';
import ReactDOM from 'react-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import AllShelves from './components/AllShelves.js';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      books: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then(books => this.setState({books: books}))
      .catch()

  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <AllShelves 
            books={this.state.books}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
