# MyReads Project

Demo: https://davidkensell.github.io/myreads/

This React app is a reading library manager *cough* Goodreads clone *cough* that allows you to search for books and mark them as reading, read, and want to read. It uses a backend API with limited search terms.

This is a project from Udacity's React course ([source repo](https://github.com/udacity/reactnd-project-myreads-starter)). The starter template provided a static example with CSS and HTML, but no React code or interactivity. I refactored the static page into a React app.

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important Search Limitations
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
