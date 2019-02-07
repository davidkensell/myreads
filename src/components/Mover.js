import React from 'react';

class Mover extends React.Component {

	render() {

		let currentShelf = 'none';
		const books = this.props.books;
		const display = this.props.book;

		for (let book of books) {
			if (display.id === book.id){
			currentShelf = book.shelf;
			break;
			}
		} 


		return (
			<div className="book-shelf-changer">
              <select value={currentShelf} onChange={(e) => this.props.action(this.props.book, e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
         )
	}
}

export default Mover;