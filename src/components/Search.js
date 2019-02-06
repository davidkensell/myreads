import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      results: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({query: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    BooksAPI.search(this.state.query)
      .then(books => this.setState({results: books}))
  }

render() {

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={this.props.close}>Close</button>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            placeholder="Search by title or author"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}/>
            <input type="submit" value="Submit" className="search-books-submit"/>   
          </form>       
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
         {this.state.results.map(book => 
            <li key={book.id}>
              <Book 
                book={book}
                action={this.props.action} 
                />
            </li>
            )}
        </ol>
      </div>
    </div>
  )
}
}

export default Search;