import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      results: [],
      query: '',
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const query = event.target.value;
    this.setState({query: query});

    if (query) {
      BooksAPI.search(query)
      .then(books => {
        if (books.length > 0) {
          this.setState({results: books});
        } else {
          this.setState({results: []});
          this.setState({error: true});
          }
        })
      }
    }

render() {

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={this.props.close}>Close</button>
        <div className="search-books-input-wrapper">
          <input 
          type="text" 
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={this.handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        {this.state.results.length > 0 && (
        <ol className="books-grid">
         {this.state.results.map(book => 
            <li key={book.id}>
              <Book 
                book={book}
                books={this.props.books}
                action={this.props.action} 
                results={this.state.results}
                />
            </li>
            )}
        </ol>
        )}
        {this.state.error && (
          <h3>No results found.</h3>
          )}
      </div>
    </div>
  )
}
}

export default Search;