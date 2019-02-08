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
Udacity said it well: "The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.""

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
