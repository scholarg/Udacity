import React from 'react';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
    state = {
        bookData: []
        /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        // showSearchPage: false
    };

    componentDidMount() {
        this.getAll();
    };

    /**
     * 获取书架上所有的书
     */
    getAll() {
        BooksAPI.getAll().then(data => {
            this.setState({booksData: data});
        });
    }

    /**
     * 更新书本信息
     * @param {object} books
     * @param {String} bookshelf
     */

    updateBook = (book, shelf) => {
        return BooksAPI.update(book, shelf).then(() => {
            this.setState({
                books: this.state.booksData.map(bk => {
                    if (bk.id === book.id) {
                        bk.shelf = shelf;
                    }
                    return bk;
                })
            });
        });
    };

    render() {
        return (<div className="app">
            <Route path="/search" render={() => <SearchBooks shelfbooks={this.state.booksData} updateBook={this.updateBook}/>}/>
            <Route exact="exact" path="/" render={() => (<ListBooks booksData={this.state.booksData} updateBook={this.updateBook}/>)}/>
        </div>);
    }
}

export default BooksApp;
