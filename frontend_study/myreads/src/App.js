import React from 'react';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
    constructor() {
        super();
        this.state = BooksAPI.getAll().then((books) => {
            this.setState({books: books});
        });
    }

    updateBook = (book, shelf) => {
        const {books} = this.state;

        const bookIndex = books.findIndex((key) => {
            return key.id === book.id;
        });

        let stateBooks = Object.assign([], books);

        if (bookIndex === -1) {
            const newBook = Object.assign({}, book);
            newBook.shelf = shelf;
            stateBooks.push(newBook);
        } else {
            stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
            stateBooks[bookIndex].shelf = shelf;
        }

        BooksAPI.update(book, shelf).then(this.setState({books: stateBooks}));
    };

    render() {
        const {books} = this.state;

        if (!books) {
            return null;
        }

        return (<div className="app">
            <Route path="/search" render={() => (
                <SearchBooks listBooks={books} updateBook={this.updateBook}/>)}/>
            <Route exact="exact" path="/" render={() => (
                <ListBooks books={books} updateBook={this.updateBook}/>)}/>
        </div>);
    }
}

export default BooksApp;
